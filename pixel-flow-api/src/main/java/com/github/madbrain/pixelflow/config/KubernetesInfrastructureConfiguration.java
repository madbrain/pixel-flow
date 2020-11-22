package com.github.madbrain.pixelflow.config;

import com.github.madbrain.pixelflow.services.KubernetesInfrastructureService;
import io.kubernetes.client.openapi.ApiClient;
import io.kubernetes.client.util.ClientBuilder;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
@ConditionalOnProperty(value = "infrastructure.type", havingValue = "kubernetes")
@EnableConfigurationProperties(KubernetesInfrastructureProperties.class)
public class KubernetesInfrastructureConfiguration {

    @Bean
    public ApiClient apiClient() throws IOException {
        return ClientBuilder.standard().build();
    }

    @Bean
    public KubernetesInfrastructureService kubernetesInfrastructureService() {
        return new KubernetesInfrastructureService();
    }

}
