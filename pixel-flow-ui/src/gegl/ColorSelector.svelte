<script>
    import { onMount, getContext } from 'svelte';
    import { key as selectorKey } from '../graph-editor/selector';
    import Selector from '../graph-editor/Selector.svelte';
    import { hsvToRgb, rgbToHsv } from './color';

    export let id = "color";
    let context;
    let selectorElement;
    let hueSelectElement;
    let lightSelectElement;
    let hueContext;
    let lightContext;
    let color = { h: 0, s: 0, v: 0 };

    const { register, getEditor } = getContext(selectorKey);
    register('select-color', openSelector);

    onMount(() => {
        hueContext = hueSelectElement.getContext("2d");
        lightContext = lightSelectElement.getContext("2d");
    });

    export function openSelector(position, ctxt) {
        selectorElement.openSelector(position);
        const { value } = ctxt;
        context = ctxt;
        color = rgbToHsv(value);
        draw();
    }

    function selectColor() {
        selectorElement.closeSelector({ value: hsvToRgb(color.h, color.s, color.v), context });
    }

    function toRgb({r, g, b}) {
        return `rgb(${r}, ${g}, ${b})`;
    }

    function draw()  {
        const width = 200;
        const height = 200;
        for (let i = 0; i < width; ++i) {
            hueContext.fillStyle = toRgb(hsvToRgb((360 * i) / width, 1, 1));
            hueContext.beginPath();
            hueContext.rect(i, 0, 1, 50);
            hueContext.fill();
        }

        for (let y = 0; y < height; ++y) {
            for (let x = 0; x < width; ++x) {
                lightContext.fillStyle = toRgb(hsvToRgb(color.h, x / width, 1 - (y / height)));
                lightContext.beginPath();
                lightContext.rect(x, y, 1, 1);
                lightContext.fill();
            }
        }
    }

    function selectHue(ev) {
        const rect = ev.target.getBoundingClientRect();
        color = {...color, h: Math.min(360, Math.max(0, 360 * (ev.clientX - rect.left) / rect.width)) };
        draw();
    }

    function selectSaturationLightness(ev) {
        const rect = ev.target.getBoundingClientRect();
        color = {...color,
            s: Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)),
            v: Math.min(1, Math.max(0, 1 - (ev.clientY - rect.top) / rect.height))
        };
        draw();
    }

</script>

<style>
canvas.hue {
    width: 100%;
    height: 50px;
    padding-bottom: 10px;
}
canvas.light {
    width: 100%;
    height: 200px;
    padding-bottom: 10px;
}
.selection {
    width: 100%;
    height: 50px;
}
</style>

<Selector bind:this={selectorElement} {id}>
    <canvas class="hue" bind:this={hueSelectElement} width="200" height="50" on:click={selectHue}></canvas>
    <canvas class="light" bind:this={lightSelectElement} width="200" height="200" on:click={selectSaturationLightness}></canvas>
    <div class="selection" style="background-color: {toRgb(hsvToRgb(color.h, color.s, color.v))}" on:click={selectColor}></div>
</Selector>