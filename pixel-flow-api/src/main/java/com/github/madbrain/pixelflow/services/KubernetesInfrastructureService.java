package com.github.madbrain.pixelflow.services;

import com.github.madbrain.pixelflow.config.KubernetesInfrastructureProperties;
import com.github.madbrain.pixelflow.domain.Workspace;
import com.github.madbrain.pixelflow.domain.WorkspaceId;
import com.github.madbrain.pixelflow.domain.WorkspaceRepository;
import com.github.madbrain.pixelflow.domain.WorkspaceStatus;
import com.google.common.collect.ImmutableMap;
import io.kubernetes.client.openapi.ApiClient;
import io.kubernetes.client.openapi.ApiException;
import io.kubernetes.client.openapi.apis.CoreV1Api;
import io.kubernetes.client.openapi.models.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.Optional;

public class KubernetesInfrastructureService extends SharedWorkspaceInfrastructure {

    private static final Logger LOGGER = LoggerFactory.getLogger(KubernetesInfrastructureService.class);

    private static final String PIXELFLOW_WORKSPACE_LABEL = "pixelflow.workspace";

    @Autowired
    private KubernetesInfrastructureProperties properties;

    @Autowired
    private WorkspaceRepository repository;

    @Autowired
    private ApiClient apiClient;

    @Value("${apiserver.url}")
    private String apiServerUrl;

    @Override
    public void startWorkspace(Workspace workspace) {
        WorkspaceId workspaceId = workspace.getWorkspaceId();

        provisionWorkspace(workspace);

        CoreV1Api api = new CoreV1Api(apiClient);
        try {
            String namespace = Optional.ofNullable(properties.getNamespace()).orElse("default");
            String labelSelector = PIXELFLOW_WORKSPACE_LABEL + "=" + workspaceId.getId();
            V1PodList list = api.listNamespacedPod(namespace, null, null, null,
                    null, labelSelector, null, null, null, null);
            if (list.getItems().size() > 0) {
                V1Pod pod = list.getItems().get(0);
                LOGGER.info("Existing pod {} for workspace {}", pod.getMetadata().getName(), workspaceId.getId());
                return;
            }

            // TODO use deployment instead for more robustness (but pod is already automatically restarted ?)
            V1Pod pod = new V1PodBuilder()
                    .withNewMetadata()
                    .withGenerateName("pixelflow-server-")
                    .addToLabels(PIXELFLOW_WORKSPACE_LABEL, workspaceId.getId())
                    .endMetadata()
                    .withNewSpec()
                    .addNewContainer()
                    .withName("server")
                    .withImage("ghcr.io/madbrain/pixel-flow-server:latest")
                    .withWorkingDir("/workspace")
                    .addNewEnv()
                    .withName("PIXELFLOW_WORKSPACE_ID").withValue(workspaceId.getId())
                    .and().addNewEnv()
                    .withName("PIXELFLOW_APISERVER_URL").withValue(getApiServerUrl())
                    .endEnv()
                    .addNewVolumeMount()
                    .withMountPath("/workspace")
                    .withSubPath(workspaceId.getId())
                    .withName("workspace-pv-storage")
                    .endVolumeMount()
                    .endContainer()
                    .addNewVolume()
                    .withName("workspace-pv-storage")
                    .withNewPersistentVolumeClaim()
                    .withClaimName("workspace-pv-claim")
                    .endPersistentVolumeClaim()
                    .endVolume()
                    .endSpec()
                    .build();

            V1Pod result = api.createNamespacedPod(namespace, pod, null, null, null);

            workspace.setStatus(WorkspaceStatus.STARTED);
            workspace.setRuntimeId(result.getMetadata().getName());

            repository.save(workspace).subscribe(entity -> {
                LOGGER.info("Started Pod id: " + entity.getRuntimeId());
            });
        } catch (ApiException e) {
            LOGGER.error("Error while starting pod: " + e.getResponseBody(), e);
        }
    }

    private String getApiServerUrl() {
        return "ws://" + apiServerUrl + "/api/workspace-ws";
    }

    @Override
    protected String getWorkspaceRoot() {
        return properties.getWorkspaceRoot();
    }
}
