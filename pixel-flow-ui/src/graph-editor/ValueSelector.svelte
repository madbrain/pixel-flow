<script>
    import Selector from './Selector.svelte';
    import { getContext } from 'svelte';
    import { key as selectorKey } from './selector';

    const { register } = getContext(selectorKey);
    register('select-value', openSelector);

    export let id = "value";
    let selectorElement;
    let inputElement;
    let error = false;
    let context;
    let value;
    let valueType;

    export function openSelector(position, ctxt) {
        selectorElement.openSelector(position);
        const { value: _value, valueType: _valueType } = ctxt;
        context = ctxt;
        value = _value;
        valueType = _valueType;
        setTimeout(() => {
            inputElement.focus();
            inputElement.select();
        }, 0);
    }

    function keyUp(e) {
        error = checkError();
        if (e.key == "Escape") {
            selectorElement.closeSelector(null);
        } else  if (e.key == "Enter") {
            const result = !error ? { value: convert(value), context } : null;
            selectorElement.closeSelector(result);
        }
    }

    function convert() {
        if (valueType.type == 'integer' || valueType.type == 'real') {
            return Number(value);
        }
        return value;
    }

    function checkError() {
        if (valueType.type == 'integer') {
            return checkInt(value) || valueType.range && checkRange(valueType.range, value);
        }
        if (valueType.type == 'real') {
            return isNaN(Number(value)) || valueType.range && checkRange(valueType.range, value);
        }
        return false;
    }

    function checkInt(value) {
        const v = Number(value);
        return isNaN(v) || v != Math.floor(v);
    }

    function checkRange(range, value) {
        return range.min != undefined && value < range.min
                || range.max != undefined && value > range.max;
    }

</script>

<style>
input {
    width: 100%;
    border: 1px solid #999999;
    background-color: #999999;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0;
    padding: 0.4em;
    font-size: inherit;
}

.error {
    border: 1px solid red;
}

input:focus {
    outline: none;
}
</style>

<Selector bind:this={selectorElement} {id}>
    <input bind:this={inputElement} class:error bind:value={value} on:keyup={keyUp}>
</Selector>