package com.github.madbrain.pixelflow.domain;

import org.springframework.data.annotation.Id;

import java.util.Optional;

public class Workspace {

    @Id
    private Long id; // id *has* to be integer

    private String workspaceId;

    private WorkspaceStatus status = WorkspaceStatus.NEW;

    private String runtimeId;

    private String graphId;

    public Workspace() {}

    public Workspace(WorkspaceId id) {
        this.workspaceId = id.getId();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public WorkspaceId getWorkspaceId() {
        return WorkspaceId.of(workspaceId);
    }

    public void setWorkspaceId(WorkspaceId id) {
        this.workspaceId = id.getId();
    }

    public WorkspaceStatus getStatus() {
        return status;
    }

    public void setStatus(WorkspaceStatus status) {
        this.status = status;
    }


    public void setRuntimeId(String runtimeId) {
        this.runtimeId = runtimeId;
    }

    public String getRuntimeId() {
        return runtimeId;
    }

    public Optional<GraphId> getGraphId() {
        return Optional.ofNullable(graphId).map(x -> GraphId.of(x));
    }

    @Override
    public String toString() {
        return String.format(
                "Workspace[id=%s, status=%s]", id, status.name());
    }

}
