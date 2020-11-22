package com.github.madbrain.pixelflow.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("infrastructure.kubernetes")
public class KubernetesInfrastructureProperties {

    private String workspaceRoot;
    private String namespace;

    public String getWorkspaceRoot() {
        return workspaceRoot;
    }

    public void setWorkspaceRoot(String workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
    }

    public String getNamespace() {
        return namespace;
    }

    public void setNamespace(String namespace) {
        this.namespace = namespace;
    }
}
