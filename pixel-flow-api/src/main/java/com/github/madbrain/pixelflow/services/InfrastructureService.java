package com.github.madbrain.pixelflow.services;

import com.github.madbrain.pixelflow.domain.Image;
import com.github.madbrain.pixelflow.domain.Workspace;
import com.github.madbrain.pixelflow.domain.WorkspaceId;
import reactor.core.publisher.Mono;

import java.util.List;

public interface InfrastructureService {
    void startWorkspace(Workspace workspace);

    Mono<List<Image>> getImages(WorkspaceId workspaceId);

    Mono<byte[]> getImage(WorkspaceId workspaceId, String imageId);
}
