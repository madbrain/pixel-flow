<script>
    import Selector from './Selector.svelte';
    import { collectLeaves } from './tree';
    import { getContext } from 'svelte';
    import { key as selectorKey } from './selector';

    const { register } = getContext(selectorKey);
    register('select-tree', openSelector);

    export let id = "tree";
    let selectorElement;
    let selectorInputElement;
    let filter = "";
    let leaves = [];
    let current = [];
    let selection = -1;
    let context;

    export function openSelector(position, ctxt) {
        const { nodes } = ctxt;
        selectorElement.openSelector(position);
        current = nodes;
        context = ctxt;
        leaves = collectLeaves(nodes);
        selection = -1;
        filter = "";
        setTimeout(() => selectorInputElement.focus(), 0);
    }

    function selectItem(node, index, next) {
        if (node.parent !== undefined) {
            current = node.nodes;
            selection = node.parent;
        } else if (node.children && node.children.length > 0) {
            current = [ { title: "..", parent: index, nodes: current }, ...node.children ];
            selection = next;
        } else {
            selectorElement.closeSelector({ value: node, context });
        }
    }

    function keyUp(e) {
        if (e.key == "Escape") {
            selectorElement.closeSelector(null);
        } else if (e.key == "ArrowDown") {
            selection = Math.min(selection + 1, nodes.length - 1);
        } else if (e.key == "ArrowUp") {
            selection = Math.max(selection - 1, 0);
        } else if (e.key == "ArrowLeft") {
            if (current[0].parent != undefined) {
                const node = current[0];
                current = node.nodes;
                selection = node.parent;
            }
        } else if (e.key == "Enter") {
            if (selection >= 0) {
                selectItem(nodes[selection], selection, 0);
            }
        } else if (e.key == "ArrowRight") {
            if (selection >= 0 && current[selection].children && current[selection].children.length > 0) {
                selectItem(nodes[selection], selection, 0);
            }
        }
    }

    function filterTree(q) {
        // TODO create an index for multi word search
        return leaves.filter(node => node.title && node.title.toLowerCase().indexOf(q.toLowerCase()) >= 0);
    }

    $: nodes = filter.length > 0 ? filterTree(filter) : current; 
    
</script>

<style>    
    input {
        width: 100%;
        border: 0;
        background-color: #999999;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 0 5px 0;
        padding: 0.4em;
        font-size: inherit;
    }
    
    input:focus {
        outline: none;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
    }
    
    li {
        margin: 0;
        padding: 5px;
    }
    
    .selected {
        background-color: #3781bf;
    }
    
    li:hover {
        background-color: #4791cf;
    }
</style>

<Selector bind:this={selectorElement} {id}>
    <input bind:this={selectorInputElement} bind:value={filter} on:keyup={keyUp}>
    <ul>
        {#each nodes as node, i}
        <li on:click={() => selectItem(node, i, -1)} class:selected={i == selection}>
            <span>{#if node.children && node.children.length > 0}{node.name}{:else}<b>{node.title}</b>{/if}</span>
        </li>
        {/each}
    </ul>
</Selector>
