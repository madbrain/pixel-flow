package com.github.madbrain.pixelflow.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.madbrain.pixelflow.infra.JSonRPCRegistry;
import com.github.madbrain.pixelflow.infra.JSonRPCTransmitter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class WorkspaceManager {

    private static final Logger LOGGER = LoggerFactory.getLogger(WorkspaceManager.class);

    private final JSonRPCTransmitter transmitter;
    private ObjectMapper mapper;
    private SimpMessagingTemplate simpMessagingTemplate;

    public WorkspaceManager(JSonRPCRegistry registry, JSonRPCTransmitter transmitter,
                            ObjectMapper mapper, SimpMessagingTemplate simpMessagingTemplate) {
        this.transmitter = transmitter;
        this.mapper = mapper;
        this.simpMessagingTemplate = simpMessagingTemplate;
        registry.registerNotification("server/ready", WorkspaceReady.class, this::onServerReady);
    }

    public void onServerReady(String workspaceId, WorkspaceReady message) {
        LOGGER.info("Pixel server for workspace {} is ready", workspaceId);
        simpMessagingTemplate.convertAndSend("/topic/workspace/" + workspaceId, new WorkspaceEvent("ready"));
    }

    public void syncGraph(String workspaceId, String graphContent) {
        LOGGER.info("Syncing graph into workspace {}", workspaceId);
        try {
            JsonNode graph = mapper.readTree(graphContent);
            transmitter.request(workspaceId, "graph/sync", graph, Object.class).subscribe(result -> {
                LOGGER.info("Pixel server in sync for workspace {}", workspaceId);
                simpMessagingTemplate.convertAndSend("/topic/workspace/" + workspaceId, new WorkspaceEvent("in-sync"));
            });
        } catch (JsonProcessingException e) {
            LOGGER.error("", e);
        }
    }

    public static class WorkspaceEvent {
        private String type;

        public WorkspaceEvent(String type) {
            this.type = type;
        }

        public String getType() {
            return type;
        }
    }

    public static class WorkspaceReady {
        private String workspace;

        public String getWorkspace() {
            return workspace;
        }

        public void setWorkspace(String workspace) {
            this.workspace = workspace;
        }
    }

}
