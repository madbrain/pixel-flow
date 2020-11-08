package com.github.madbrain.pixelflow.domain;

import java.util.UUID;

public class WorkspaceId {

    private final String id;

    private WorkspaceId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return "WorkspaceId(" + id + ")";
    }

    public static WorkspaceId newRandom() {
        return new WorkspaceId(UUID.randomUUID().toString());
    }

    public static WorkspaceId of(String id) {
        return new WorkspaceId(id);
    }
}
