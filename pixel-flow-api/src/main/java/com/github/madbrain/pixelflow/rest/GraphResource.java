package com.github.madbrain.pixelflow.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.madbrain.pixelflow.domain.Graph;
import com.github.madbrain.pixelflow.domain.Workspace;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.io.IOException;

@RestController
public class GraphResource {

    @GetMapping("api/graph/{id}")
    public Mono<Workspace> getOne(@PathVariable("id") String id) {
        throw new RuntimeException("TODO");
    }

    // TODO save

    @GetMapping("api/default-graph")
    public Mono<Graph> getDefault() {
        try {
            Graph graph = Graph.containing(new ObjectMapper().readTree(
                    getClass().getResourceAsStream("/default/graph.json")));
            return Mono.just(graph);
        } catch (IOException e) {
            return Mono.error(e);
        }
    }
}
