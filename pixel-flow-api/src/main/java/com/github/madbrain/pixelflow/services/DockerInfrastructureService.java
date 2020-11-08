package com.github.madbrain.pixelflow.services;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.command.CreateContainerCmd;
import com.github.dockerjava.api.command.CreateContainerResponse;
import com.github.dockerjava.api.model.AccessMode;
import com.github.dockerjava.api.model.Bind;
import com.github.dockerjava.api.model.Container;
import com.github.dockerjava.api.model.Volume;
import com.github.madbrain.pixelflow.config.DockerInfrastructureProperties;
import com.github.madbrain.pixelflow.domain.*;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@EnableConfigurationProperties(DockerInfrastructureProperties.class)
public class DockerInfrastructureService implements InfrastructureService {

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
        WorkspaceId workspaceId = workspace.getWorkspaceId();

        Path workspacePath = Paths.get(properties.getWorkspaceRoot(), workspaceId.getId());
        workspacePath.toFile().mkdirs();

        if (workspace.getStatus() == WorkspaceStatus.NEW) {
            try (FileOutputStream outputStream = new FileOutputStream(workspacePath.resolve("cat.png").toFile())) {
                IOUtils.copy(getClass().getResourceAsStream("/default/cat.png"), outputStream);
            } catch (IOException e) {
                LOGGER.warn("Error while provisioning workspace default content", e);
            }
        }
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

            createCommand.getHostConfig().setBinds(
                    new Bind(workspacePath.toString(), new Volume("/workspace"), AccessMode.rw));

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

        // TODO save status and containerId in workspace
        workspace.setStatus(WorkspaceStatus.STARTED);
        workspace.setRuntimeId(containerId);

        repository.save(workspace);

        LOGGER.info("Started Container id: " + containerId);
    }

    @Override
    public Mono<List<Image>> getImages(WorkspaceId workspaceId) {
        Path workspacePath = Paths.get(properties.getWorkspaceRoot(), workspaceId.getId());
        List<Image> images = Stream.of(workspacePath.toFile().listFiles((file, s) -> s.endsWith(".png")))
                .map(imageFile -> {
                    long modificationTime = System.currentTimeMillis();
                    try {
                        modificationTime = Files.readAttributes(imageFile.toPath(), BasicFileAttributes.class).lastModifiedTime().toMillis();
                    } catch (IOException e) {
                        // ignore
                    }
                    return new Image(modificationTime, imageFile.getName());
                })
                .collect(Collectors.toList());
        return Mono.just(images);
    }

    @Override
    public Mono<byte[]> getImage(WorkspaceId workspaceId, String imageId) {
        Path workspacePath = Paths.get(properties.getWorkspaceRoot(), workspaceId.getId());
        Path imagePath = workspacePath.resolve(imageId);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try (FileInputStream stream = new FileInputStream(imagePath.toFile())) {
            IOUtils.copy(stream, out);
            return Mono.just(out.toByteArray());
        } catch (IOException e) {
            return Mono.error(e);
        }
    }

    private String getApiServerUrl() {
        return "ws://" + apiServerUrl + "/api/workspace-ws";
    }
}
