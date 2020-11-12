<script>
import { onMount, setContext, createEventDispatcher } from "svelte";
import { Editor, ControlKey } from "./editor";
import { darkTheme, Renderer } from "./renderer";
import { Point } from "./geometry";
import { key as selectorKey } from './selector';
import TreeSelector from './TreeSelector.svelte';
import ValueSelector from './ValueSelector.svelte';

const dispatch = createEventDispatcher();

let parentElement;
let canvas;
let context;
let width;
let height;

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
    const rect = parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    context = canvas.getContext('2d', {alpha: false});
    renderer = new Renderer(context, { width, height }, theme, graphicalHelper);
    editor = new Editor(renderer, nodeFactory, {
        openSelector(position, type, context) {
            const openFunc = selectors[type];
            if (openFunc) {
                openFunc(position, context);
                return true;
            }
            return false;
        },
        onChangeGraph(isVisual, nodeGroup) {
            dispatch("change", { isVisual, nodeGroup });
        }
    });
    setTimeout(() => {
        renderer.setSize({ width, height });
        editor.draw();
    }, 10);
});

export function setNodeGroup(nodeGroup) {
    editor.setNodeGroup(nodeGroup);
}

export function onWorkspaceEvent(event) {
    editor.onWorkspaceEvent(event);
}

export function doAction(action) {
    const rect = parentElement.getBoundingClientRect();
    editor.doAction(new Point(rect.left, rect.top), action);
}

function handleResize() {
    const rect = parentElement.getBoundingClientRect();
    width = rect.width;
    height= rect.height;
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

function makeEvent(ev) {
    const rect = ev.target.getBoundingClientRect();
    return {
        position: new Point(ev.clientX - rect.left, ev.clientY - rect.top),
        specialKeys: makeSpecialKeys(ev),
        deltaY: ev.deltaY,
        key: ev.key
    };
}

function handleMouseDown(ev) {
    editor.handleMouseDown(makeEvent(ev));
}

function handleMouseUp(ev) {
    editor.handleMouseUp(makeEvent(ev));
}

function handleMouseMove(ev) {
    editor.handleMouseMove(makeEvent(ev));
}

function handleMouseWheel(ev) {
    editor.handleMouseWheel(makeEvent(ev));
}

function handleKeyPress(ev) {
    editor.handleKeyPress(makeEvent(ev));
}
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>

<div bind:this={parentElement}
    on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	on:mousemove={handleMouseMove}
    on:wheel={handleMouseWheel}>

    <canvas bind:this={canvas}
        width={width} height={height}
        style="width: {width}px; height: {height}px;">
    </canvas>

    <ValueSelector />
    <TreeSelector />
    <slot></slot>
</div>

<svelte:window
    on:resize|passive={handleResize}
    on:keypress={handleKeyPress} />
