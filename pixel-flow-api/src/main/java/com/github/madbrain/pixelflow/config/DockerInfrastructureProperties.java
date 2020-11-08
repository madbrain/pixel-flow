package com.github.madbrain.pixelflow.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("infrastructure.docker")
public class DockerInfrastructureProperties {

    private String workspaceRoot;

    public String getWorkspaceRoot() {
        return workspaceRoot;
    }

    public void setWorkspaceRoot(String workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
    }
}
