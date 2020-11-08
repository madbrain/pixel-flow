package com.github.madbrain.pixelflow.domain;

import com.fasterxml.jackson.databind.JsonNode;

public class Graph {

    private JsonNode content;

    public Graph(JsonNode content) {
        this.content = content;
    }

    public JsonNode getContent() {
        return content;
    }

    public static Graph containing(JsonNode content) {
        return new Graph(content);
    }
}
