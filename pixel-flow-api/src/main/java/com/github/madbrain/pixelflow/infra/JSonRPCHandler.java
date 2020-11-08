package com.github.madbrain.pixelflow.infra;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import reactor.core.publisher.Mono;
import reactor.core.publisher.MonoProcessor;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class JSonRPCHandler extends TextWebSocketHandler implements JSonRPCTransmitter {

    private static final Logger LOGGER = LoggerFactory.getLogger(JSonRPCHandler.class);

    public static final String JSONRPC_VERSION = "2.0";

    @Autowired
    private JSonRPCRegistry registry;

    @Autowired
    private ObjectMapper mapper;

    private AtomicInteger requestIdCounter = new AtomicInteger(1);

    // TODO should be a bidirectional map
    private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private Map<String, PendingRequest<?>> pendingRequests = new ConcurrentHashMap<>();

    private Optional<String> getWorkspaceId(WebSocketSession session) {
        return sessions.entrySet().stream()
                .filter(e -> e.getValue() == session)
                .findFirst()
                .map(Map.Entry::getKey);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        String workspaceId = Paths.get(session.getUri().getPath()).getFileName().toString();
        sessions.put(workspaceId, session);
        LOGGER.info("New server connection for workspace: " + workspaceId);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        getWorkspaceId(session).ifPresent(workspaceId -> {
            sessions.remove(workspaceId);
            LOGGER.info("Close server connection for workspace: " + workspaceId);
        });
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        JsonNode node = mapper.readTree(message.getPayload());
        String version = node.at("/jsonrpc").asText();
        if (! version.equals(JSONRPC_VERSION)) {
            LOGGER.warn("invalid json-rpc version: " + version);
            return;
        }
        String method = node.at("/method").asText();
        String id = node.at("/id").asText();
        if (! method.isBlank()) {
            if (!id.isBlank()) {
                JsonNode params = node.at("/params");
                LOGGER.info("REQUEST: " + method + " / " + id + " / " + params);
                // TODO call handler

            } else {
                getWorkspaceId(session).ifPresent(workspaceId -> {
                    registry.getNotification(method).ifPresent(methodHandler -> {
                        try {
                            Object value = mapper.treeToValue(node.at("/params"), methodHandler.getMessageClass());
                            methodHandler.apply(workspaceId, value);
                        } catch (JsonProcessingException e) {
                            LOGGER.error("Error while creating parameter value", e);
                        }
                    });
                });
            }
        } else if (! id.isBlank()) {
            JsonNode error = node.at("/error");
            if (error.isMissingNode()) {
                JsonNode result = node.at("/result");
                PendingRequest<?> pendingRequest = pendingRequests.get(id);
                if (pendingRequest != null) {
                    pendingRequest.resolve(result);
                    pendingRequests.remove(pendingRequest);
                }
            } else {
                PendingRequest<?> pendingRequest = pendingRequests.get(id);
                if (pendingRequest != null) {
                    pendingRequest.result.onError(new RuntimeException(error.asText())); // TODO better error mapping
                    pendingRequests.remove(pendingRequest);
                }
            }
        } else {
            LOGGER.warn("invalide message: " + node);
        }

    }

    public <T> Mono<T> request(String workspaceId, String method, Object params, Class<T> resultClass) {
        return Optional.ofNullable(sessions.get(workspaceId)).map(session -> {

            String requestId = String.valueOf(requestIdCounter.incrementAndGet());
            JsonRPCRequest myRequest = new JsonRPCRequest(requestId, method, params);
            try {
                session.sendMessage(new TextMessage(mapper.writeValueAsString(myRequest)));
                PendingRequest<T> pendingRequest = new PendingRequest<>(resultClass);
                pendingRequests.put(requestId, pendingRequest);
                return pendingRequest.result;
            } catch (IOException e) {
                return Mono.<T>error(e);
            }
        }).orElseGet(() -> Mono.error(new RuntimeException("No session for workspace")));
    }

    private class PendingRequest<T> {
        private MonoProcessor<T> result = MonoProcessor.create();
        private Class<T> resultClass;

        public PendingRequest(Class<T> resultClass) {
            this.resultClass = resultClass;
        }

        public void resolve(JsonNode value) {
            try {
                result.onNext(mapper.treeToValue(value, resultClass));
                result.onComplete();
            } catch (JsonProcessingException e) {
                result.onError(e);
            }
        }
    }

    public static class JsonRPCRequest {
        private String jsonrpc = JSONRPC_VERSION;
        private String method;
        private String id;
        private Object params;

        public JsonRPCRequest(String id, String method, Object params) {
            this.id = id;
            this.method = method;
            this.params = params;
        }

        public String getJsonrpc() {
            return jsonrpc;
        }

        public String getMethod() {
            return method;
        }

        public String getId() {
            return id;
        }

        public Object getParams() {
            return params;
        }
    }
}
