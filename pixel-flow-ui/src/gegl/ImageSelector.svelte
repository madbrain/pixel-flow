<script>
    import { getContext } from 'svelte';
    import { key as selectorKey } from '../graph-editor/selector';

    export let id = "images";
    let x = 0;
    let y = 0;
    let hide = true;
    let context;
    let images = [
        { id: "1", src: "cat.png" },
        { id: "2", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
        { id: "3", src: "cat.png" },
    ];

    const { register, getEditor } = getContext(selectorKey);
    register('select-image', openSelector);

    export function openSelector(position, ctxt) {
        x = position.x;
        y = position.y;
        hide = false;
        context = ctxt;
        // TODO load images ?
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
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    background-color: #555555;
    filter: drop-shadow(5px 5px 5px black);
}

.hide {
    display: none;
}

header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;
}

.images {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    max-height: 600px; /* TODO use calc ? */
}

img {
    padding: 10px;
    display: inline;
}

</style>

<div class="glass-pane" class:hide on:click|capture={glassPaneClose}>
    <div class="selector" id="selector-{id}" style="left: {x}px; top: {y}px">
        <header>
            <h1>Images</h1>
            <!-- TODO add a better close icon -->
            <button on:click={() => closeSelector(null)}>X</button>
        </header>
        <div class="images" >
            {#each images as image}
            <img src={image.src} alt="Image {image.id}" width="300">
            {/each}
            <!-- TODO add upload element -->
        </div>
    </div>
</div>