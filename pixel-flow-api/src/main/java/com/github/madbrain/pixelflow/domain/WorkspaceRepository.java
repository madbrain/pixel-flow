package com.github.madbrain.pixelflow.domain;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface WorkspaceRepository extends ReactiveCrudRepository<Workspace, String> {
    Mono<Workspace> findByWorkspaceId(String id);
}
