package com.github.madbrain.pixelflow.domain;

public class GraphId {

    private final String id;

    private GraphId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return "GraphId(" + id + ")";
    }

    public static GraphId of(String id) {
        return new GraphId(id);
    }
}
