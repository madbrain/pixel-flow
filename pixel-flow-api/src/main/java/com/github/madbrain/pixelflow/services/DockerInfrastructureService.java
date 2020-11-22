package com.github.madbrain.pixelflow.services;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.command.CreateContainerCmd;
import com.github.dockerjava.api.command.CreateContainerResponse;
import com.github.dockerjava.api.model.AccessMode;
import com.github.dockerjava.api.model.Bind;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.Volume;
import com.github.madbrain.pixelflow.config.DockerInfrastructureProperties;
import com.github.madbrain.pixelflow.domain.Workspace;
import com.github.madbrain.pixelflow.domain.WorkspaceId;
import com.github.madbrain.pixelflow.domain.WorkspaceRepository;
import com.github.madbrain.pixelflow.domain.WorkspaceStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public class DockerInfrastructureService extends SharedWorkspaceInfrastructure {

    private static final Logger LOGGER = LoggerFactory.getLogger(DockerInfrastructureService.class);

    @Autowired
    private DockerClient dockerClient;

    @Autowired
    private WorkspaceRepository repository;

    @Autowired
    private DockerInfrastructureProperties properties;

    @Value("${apiserver.url}")
    private String apiServerUrl;

    @Override
    public void startWorkspace(Workspace workspace) {

        provisionWorkspace(workspace);

        WorkspaceId workspaceId = workspace.getWorkspaceId();
        String workspaceName = "pixelflow_" + workspaceId.getId();
        List<Container> containers = dockerClient.listContainersCmd()
                .withShowAll(true)
                .withNameFilter(Collections.singleton(workspaceName)).exec();

        String containerId = null;
        boolean needStart = true;
        if (containers.isEmpty()) {
            LOGGER.info("Create workspace: " + workspaceId.getId());
            CreateContainerCmd createCommand = dockerClient.createContainerCmd("pixel-flow-server:latest")
                    .withName(workspaceName)
                    .withEnv("PIXELFLOW_WORKSPACE_ID=" + workspaceId.getId(),
                            "PIXELFLOW_APISERVER_URL=" + getApiServerUrl())
                    .withWorkingDir("/workspace");

            if (StringUtils.hasText(properties.getNetwork())) {
                LOGGER.info("Using docker network " + properties.getNetwork());
                createCommand.getHostConfig().withNetworkMode(properties.getNetwork());
            }

            Path workspaceMountPath = Paths.get(Optional.ofNullable(properties.getWorkspaceRootMount())
                    .orElse(properties.getWorkspaceRoot()), workspaceId.getId());
            createCommand.getHostConfig().setBinds(
                    new Bind(workspaceMountPath.toString(), new Volume("/workspace"), AccessMode.rw));

            CreateContainerResponse response = createCommand.exec();

            containerId = response.getId();
        } else {
            Container container = containers.get(0);
            LOGGER.info("Existing workspace " + workspaceId.getId() +" state is " + container.getState());
            containerId = container.getId();
            needStart = container.getState().equals("exited");
        }

        if (needStart) {
            LOGGER.info("Start workspace: " + workspaceId.getId());
            dockerClient.startContainerCmd(containerId).exec();
        }

        workspace.setStatus(WorkspaceStatus.STARTED);
        workspace.setRuntimeId(containerId);

        repository.save(workspace).subscribe(entity -> {
            LOGGER.info("Started Container id: " + entity.getRuntimeId());
        });

    }

    private String getApiServerUrl() {
        return "ws://" + apiServerUrl + "/api/workspace-ws";
    }

    @Override
    protected String getWorkspaceRoot() {
        return properties.getWorkspaceRoot();
    }
}
