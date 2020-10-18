<script>
    import { NodeFactory } from './nodes';
    import { load } from './io';
    import GraphEditor from './GraphEditor.svelte';

    import { nodeDefinitions, GeglGraphicalHelper } from './gegl/gegl';
    import { example } from './gegl/example';
    import ColorSelector from './gegl/ColorSelector.svelte';

    const nodeFactory = new NodeFactory(nodeDefinitions);
    const nodeGroup = load(nodeFactory, example);

</script>

<GraphEditor {nodeGroup} {nodeFactory} graphicalHelper={new GeglGraphicalHelper()}>
    <ColorSelector />
</GraphEditor>

<style>
:global(html, body) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>