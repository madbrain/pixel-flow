package com.github.madbrain.pixelflow.config;

import com.github.madbrain.pixelflow.infra.JSonRPCHandler;
import com.github.madbrain.pixelflow.infra.JSonRPCRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WorkspaceWebSocketConfiguration implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(jsonRPCHandler(), "/api/workspace-ws/**");
    }

    @Bean
    public JSonRPCHandler jsonRPCHandler() {
        return new JSonRPCHandler();
    }

    @Bean
    public JSonRPCRegistry registry() {
        return new JSonRPCRegistry();
    }

}
