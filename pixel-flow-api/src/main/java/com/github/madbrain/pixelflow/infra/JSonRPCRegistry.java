package com.github.madbrain.pixelflow.infra;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.BiConsumer;

public class JSonRPCRegistry {

    private Map<String, MethodHandler> notificationHandlers = new HashMap<>();

    public <T> void registerNotification(String method, Class<T> messageClass, BiConsumer<String, T> handler) {
        notificationHandlers.put(method, new MethodHandler(messageClass, handler));
    }

    public Optional<MethodHandler> getNotification(String method) {
        return Optional.ofNullable(notificationHandlers.get(method));
    }

    public static class MethodHandler<T> {

        private final Class<T> messageClass;
        private final BiConsumer<String, T> handler;

        public MethodHandler(Class<T> messageClass, BiConsumer<String, T> handler) {
            this.messageClass = messageClass;
            this.handler = handler;
        }

        public Class<?> getMessageClass() {
            return messageClass;
        }

        public void apply(String workspaceId, Object value) {
            this.handler.accept(workspaceId, messageClass.cast(value));
        }
    }


}
