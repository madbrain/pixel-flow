<script>
    import { onMount } from 'svelte';
    import { switchMap, tap } from 'rxjs/operators';
    import { NodeFactory } from './graph-editor/nodes';
    import { load } from './io';
    import { startWorkspace } from './workspace';
    import NavBar from './NavBar.svelte';
    import GraphEditor from './graph-editor/GraphEditor.svelte';

    import { nodeDefinitions, GeglGraphicalHelper } from './gegl/gegl';
    import ColorSelector from './gegl/ColorSelector.svelte';
    import ImageCatalogSelector from './gegl/ImageCatalogSelector.svelte';

    const nodeFactory = new NodeFactory(nodeDefinitions);
    let editor;
    let workspace;

    onMount(() => {
        startWorkspace(event => editor.onWorkspaceEvent(event))
            .pipe(tap(w => workspace = w))
            .pipe(switchMap(workspace => {
                // TODO get graphId from URL
                const graphId = null;
                return workspace.loadGraph(graphId);
            }))
            .subscribe(graph => {
                editor.setNodeGroup(load(nodeFactory, graph.content));
            });
    });

    function changeGraph(e) {
        const { isVisual, nodeGroup } = e.detail;
        workspace.changeGraph(isVisual, nodeGroup);
    }

</script>

<NavBar on:action={(ev) => editor.doAction(ev.detail)} />

<div class="editor">
    <GraphEditor bind:this={editor} {nodeFactory}
            graphicalHelper={new GeglGraphicalHelper()}
            on:change={changeGraph}>
        <ColorSelector />
        <ImageCatalogSelector {workspace} />
    </GraphEditor>
</div>

<style>
.editor {
    width: 100vw;
    height: calc(100vh - var(--nav-h));
}
</style>