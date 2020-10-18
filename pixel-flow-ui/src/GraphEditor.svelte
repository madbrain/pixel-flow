<script>
import { onMount, setContext } from "svelte";
import { Editor, ControlKey } from "./editor";
import { darkTheme, Renderer } from "./renderer";
import { Point } from "./geometry";
import { key as selectorKey } from './selector';
import TreeSelector from './TreeSelector.svelte';
import ValueSelector from './ValueSelector.svelte';

let canvas;
let context;
let width = window.innerWidth;
let height = window.innerHeight;
let pixelRatio = window.devicePixelRatio;

export let nodeGroup;
export let nodeFactory;
export let graphicalHelper;

const theme = darkTheme;
const selectors = {};
let renderer;
let editor;

setContext(selectorKey, {
    register: (key, openFunc) => {
        selectors[key] = openFunc;
    },
    getEditor: () => editor
});

onMount(() => {
    context = canvas.getContext('2d', {alpha: false});
    renderer = new Renderer(context, { width, height }, theme, graphicalHelper);
    editor = new Editor(renderer, nodeFactory, nodeGroup, {
        openSelector(position, type, context) {
            const openFunc = selectors[type];
            if (openFunc) {
                openFunc(position, context);
                return true;
            }
            return false;
        }
    });
    editor.draw();
});

function handleResize() {
    width = window.innerWidth;
    height= window.innerHeight;
    pixelRatio = window.devicePixelRatio;
    setTimeout(() => {
        renderer.setSize({ width, height });
        editor.draw();
    }, 10);
}

function makeSpecialKeys(ev) {
    let specialKeys = 0;
    if (ev.altKey) {
        specialKeys |= ControlKey.AltKey;
    }
    if (ev.shiftKey) {
        specialKeys |= ControlKey.ShiftKey;
    }
    if (ev.ctrlKey) {
        specialKeys |= ControlKey.CtrlKey;
    }
    return specialKeys;
}

function handleMouseDown(ev) {
    editor.handleMouseDown({ position: new Point(ev.clientX, ev.clientY), specialKeys: makeSpecialKeys(ev) });
}

function handleMouseUp(ev) {
    editor.handleMouseUp({ position: new Point(ev.clientX, ev.clientY), specialKeys: makeSpecialKeys(ev) });
}

function handleMouseMove(ev) {
    editor.handleMouseMove({ position: new Point(ev.clientX, ev.clientY), specialKeys: makeSpecialKeys(ev) });
}

function handleMouseWheel(ev) {
    editor.handleMouseWheel({ position: new Point(ev.clientX, ev.clientY), specialKeys: makeSpecialKeys(ev), deltaY: ev.deltaY });
}

function handleKeyPress(ev) {
    editor.handleKeyPress({ position: new Point(ev.clientX, ev.clientY), specialKeys: makeSpecialKeys(ev), key: ev.key });
}
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>

<div
    on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mousemove={handleMouseMove}
    on:wheel={handleMouseWheel}>

    <canvas bind:this={canvas}
        width={width*pixelRatio} height={height*pixelRatio}
        style="width: {width}px; height: {height}px;">
    </canvas>

    <ValueSelector />
    <TreeSelector />
    <slot></slot>
</div>

<svelte:window
    on:resize|passive={handleResize}
    on:keypress={handleKeyPress} />
