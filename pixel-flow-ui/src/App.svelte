<script>
    import { NodeFactory } from './graph-editor/nodes';
    import { load } from './io';
    import NavBar from './NavBar.svelte';
    import GraphEditor from './graph-editor/GraphEditor.svelte';

    import { nodeDefinitions, GeglGraphicalHelper } from './gegl/gegl';
    import { example } from './gegl/example';
    import ColorSelector from './gegl/ColorSelector.svelte';
    import ImageSelector from './gegl/ImageSelector.svelte';

    const nodeFactory = new NodeFactory(nodeDefinitions);
    const nodeGroup = load(nodeFactory, example);
    let editor;

</script>

<NavBar on:action={(ev) => editor.doAction(ev.detail)} />

<div class="editor">
    <GraphEditor bind:this={editor} {nodeGroup} {nodeFactory} graphicalHelper={new GeglGraphicalHelper()}>
        <ColorSelector />
        <ImageSelector />
    </GraphEditor>
</div>

<style>
.editor {
    width: 100vw;
    height: calc(100vh - var(--nav-h));
}
</style>