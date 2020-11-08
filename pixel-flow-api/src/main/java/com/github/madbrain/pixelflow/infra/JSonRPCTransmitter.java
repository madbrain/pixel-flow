package com.github.madbrain.pixelflow.infra;

import reactor.core.publisher.Mono;

public interface JSonRPCTransmitter {
    <T> Mono<T> request(String workspaceId, String method, Object params, Class<T> resultClass);
}
