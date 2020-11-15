package com.github.madbrain.pixelflow.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("infrastructure.docker")
public class DockerInfrastructureProperties {

    private String workspaceRoot;

    private String network;

    private String workspaceRootMount;

    public String getWorkspaceRoot() {
        return workspaceRoot;
    }

    public void setWorkspaceRoot(String workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
    }

    public String getNetwork() {
        return network;
    }

    public void setNetwork(String network) {
        this.network = network;
    }

    public String getWorkspaceRootMount() {
        return workspaceRootMount;
    }

    public void setWorkspaceRootMount(String workspaceRootMount) {
        this.workspaceRootMount = workspaceRootMount;
    }
}
