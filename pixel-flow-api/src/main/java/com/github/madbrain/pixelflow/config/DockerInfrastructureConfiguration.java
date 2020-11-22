package com.github.madbrain.pixelflow.config;

import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.core.DefaultDockerClientConfig;
import com.github.dockerjava.core.DockerClientConfig;
import com.github.dockerjava.core.DockerClientImpl;
import com.github.dockerjava.httpclient5.ApacheDockerHttpClient;
import com.github.dockerjava.transport.DockerHttpClient;
import com.github.madbrain.pixelflow.services.DockerInfrastructureService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConditionalOnProperty(name = "infrastructure.type", havingValue = "docker")
@EnableConfigurationProperties(DockerInfrastructureProperties.class)
public class DockerInfrastructureConfiguration {

    @Bean
    public DockerClientConfig dockerConfig() {
        return DefaultDockerClientConfig.createDefaultConfigBuilder().build();
    }

    @Bean
    public DockerHttpClient dockerHttpClient(DockerClientConfig config) {
        return new ApacheDockerHttpClient.Builder()
                .dockerHost(config.getDockerHost())
                .sslConfig(config.getSSLConfig())
                .build();
    }

    @Bean
    public DockerClient dockerClient(DockerClientConfig config, DockerHttpClient httpClient) {
        return DockerClientImpl.getInstance(config, httpClient);
    }

    @Bean
    public DockerInfrastructureService dockerInfrastructureService() {
        return new DockerInfrastructureService();
    }
}
