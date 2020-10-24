<script>
    import { getContext } from 'svelte';
    import { key as selectorKey } from './selector';

    export let id;
    let x = 0;
    let y = 0;
    let hide = true;

    const { getEditor } = getContext(selectorKey);

    export function openSelector(position) {
        x = position.x;
        y = position.y;
        hide = false;
    }

    export function closeSelector(value) {
        hide = true;
        getEditor().closeSelector(value);
    }

    function glassPaneClose(ev) {
        if (!ev.target.closest("#selector-" + id)) {
            closeSelector(null);
        }
    }
    
</script>

<style>
    .glass-pane {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }
    
    .selector {
        margin: 0;
        padding: 10px;
        position: fixed;
        width: 200px;
        border: 1px solid black;
        border-radius: 10px;
        color: white;
        background-color: #555555;
        filter: drop-shadow(5px 5px 5px black);
    }
    
    .hide {
        display: none;
    }

</style>

<div class="glass-pane" class:hide on:click|capture={glassPaneClose}>
    <div class="selector" id="selector-{id}" style="left: {x}px; top: {y}px">
        <slot></slot>
    </div>
</div>
