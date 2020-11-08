package com.github.madbrain.pixelflow.rest;

import com.github.madbrain.pixelflow.domain.*;
import com.github.madbrain.pixelflow.services.InfrastructureService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
@RequestMapping("api/workspace")
public class WorkspaceResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(WorkspaceResource.class);

    private WorkspaceRepository workspaceRepository;
    private WorkspaceManager workspaceManager;
    private InfrastructureService infrastructureService;

    private WorkspaceResource(WorkspaceRepository workspaceRepository,
                              WorkspaceManager workspaceManager,
                              InfrastructureService infrastructureService) {
        this.workspaceRepository = workspaceRepository;
        this.workspaceManager = workspaceManager;
        this.infrastructureService = infrastructureService;
    }

    @GetMapping
    public Flux<Workspace> getAll() {
        return workspaceRepository.findAll();
    }

    @GetMapping("/{id}")
    public Mono<Workspace> getOne(@PathVariable("id") String id) {
        return workspaceRepository.findByWorkspaceId(id);
    }

    @PostMapping
    public Mono<WorkspaceResponse> createWorkspace(@RequestBody() WorkspaceRequest request) {
        return Mono.justOrEmpty(request.getId())
                .map(WorkspaceId::of)
                .switchIfEmpty(Mono.just(WorkspaceId.newRandom()))
                .flatMap(workspaceId -> workspaceRepository.findByWorkspaceId(workspaceId.getId())
                        .switchIfEmpty(workspaceRepository.save(new Workspace(workspaceId))))
                .doOnNext(workspace -> infrastructureService.startWorkspace(workspace))
                .map(workspace -> new WorkspaceResponse(workspace.getWorkspaceId()));
    }

    @GetMapping("/{id}/image")
    public Mono<CatalogResponse> getImageCatalog(@PathVariable("id") String id) {
        return infrastructureService.getImages(WorkspaceId.of(id))
                .map(CatalogResponse::new);
    }

    @GetMapping("/{id}/image/{imageId}")
    public Mono<byte[]> getImageCatalog(@PathVariable("id") String id, @PathVariable("imageId") String imageId) {
        return infrastructureService.getImage(WorkspaceId.of(id), imageId);
    }

    @MessageMapping("/workspace/{workspaceId}/graph")
    public void processGraph(@DestinationVariable String workspaceId, String content) throws Exception {
        workspaceManager.syncGraph(workspaceId, content);
    }

    public static class WorkspaceRequest {
        private String id;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }
    }

    public static class WorkspaceResponse {

        private final String id;

        public WorkspaceResponse(WorkspaceId workspaceId) {
            this.id = workspaceId.getId();
        }

        public String getId() {
            return id;
        }
    }

    public static class CatalogResponse {

        private final List<Image> images;

        public CatalogResponse(List<Image> images) {
            this.images = images;
        }

        public List<Image> getImages() {
            return images;
        }
    }

}
