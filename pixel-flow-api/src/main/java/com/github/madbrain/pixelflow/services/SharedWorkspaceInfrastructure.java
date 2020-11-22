package com.github.madbrain.pixelflow.services;

import com.github.madbrain.pixelflow.domain.Image;
import com.github.madbrain.pixelflow.domain.Workspace;
import com.github.madbrain.pixelflow.domain.WorkspaceId;
import com.github.madbrain.pixelflow.domain.WorkspaceStatus;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import reactor.core.publisher.Mono;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public abstract class SharedWorkspaceInfrastructure implements InfrastructureService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SharedWorkspaceInfrastructure.class);

    protected abstract String getWorkspaceRoot();

    protected void provisionWorkspace(Workspace workspace) {
        Path workspacePath = Paths.get(getWorkspaceRoot(), workspace.getWorkspaceId().getId());
        workspacePath.toFile().mkdirs();

        if (workspace.getStatus() == WorkspaceStatus.NEW) {
            try (FileOutputStream outputStream = new FileOutputStream(workspacePath.resolve("cat.png").toFile())) {
                IOUtils.copy(getClass().getResourceAsStream("/default/cat.png"), outputStream);
            } catch (IOException e) {
                LOGGER.warn("Error while provisioning workspace default content", e);
            }
        }
    }

    @Override
    public Mono<List<Image>> getImages(WorkspaceId workspaceId) {
        Path workspacePath = Paths.get(getWorkspaceRoot(), workspaceId.getId());
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
        Path workspacePath = Paths.get(getWorkspaceRoot(), workspaceId.getId());
        Path imagePath = workspacePath.resolve(imageId);
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        try (FileInputStream stream = new FileInputStream(imagePath.toFile())) {
            IOUtils.copy(stream, out);
            return Mono.just(out.toByteArray());
        } catch (IOException e) {
            return Mono.error(e);
        }
    }
}
