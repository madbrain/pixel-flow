package com.github.madbrain.pixelflow.domain;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import reactor.core.publisher.Mono;

public interface WorkspaceRepository extends R2dbcRepository<Workspace, String> {
    Mono<Workspace> findByWorkspaceId(String id);
}
