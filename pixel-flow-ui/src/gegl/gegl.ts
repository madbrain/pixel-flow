
import { ChangePropertyValueCommand } from '../graph-editor/commands';
import { Editor, Event, Node, NodeProperty } from '../graph-editor/editor';
import { Point } from '../graph-editor/geometry';
import { getDefaultPropertyHandler } from '../graph-editor/handlers';
import { NodeDefinition, PropertyDefinition, PropertyType } from '../graph-editor/nodes';
import { Color, GraphicalHelper, PropertyHandler, Renderer, rgb } from '../graph-editor/renderer';
import { State } from '../graph-editor/states';
import { CommonValueType, ValueDefinition } from '../graph-editor/value';
import { convertColorFromString } from './color';
import { gegl } from './gegl-nodes-db';

enum GeglValueType {
    COLOR = "color",
    IMAGE = "image",
}

const BOOL_DEF: ValueDefinition = { type: CommonValueType.BOOLEAN };
const REAL_DEF: ValueDefinition = { type: CommonValueType.REAL };
const INTEGER_DEF: ValueDefinition = { type: CommonValueType.INTEGER };
const IMAGE_DEF: ValueDefinition = { type: GeglValueType.IMAGE };
const COLOR_DEF: ValueDefinition = { type: GeglValueType.COLOR };

function normalizeLabel(title: string, name: string) {
    if (title) {
        return title;
    }
    // TODO remove prefix before ':' split words on '-' and capitalize
    return name;
}

function buildPorts(ports, type: PropertyType): PropertyDefinition[] {
    return ports.map(port => {
        return {
            type,
            label: port,
            linkable: true,
            editable: false,
            valueType: IMAGE_DEF
        };
    });
}

function buildType(property): ValueDefinition {
    if (property.type == 'number') {
        if (property.range) {
            return {...REAL_DEF, range: { min: property.range.min, max: property.range.max }};
        }
        return REAL_DEF;
    }
    if (property.type == 'int') {
        if (property.range) {
            return {...INTEGER_DEF, range: { min: property.range.min, max: property.range.max }};
        }
        return INTEGER_DEF;
    }
    if (property.type == 'boolean') {
        return BOOL_DEF;
    }
    if (property.type == 'enum') {
        return {
            type: CommonValueType.ENUM,
            enumValues: property.elements.map(element => {
                return { name: element.value, label: element.label };
            })
        }
    }
    if (property.type == 'color') {
        return COLOR_DEF;
    }
    return IMAGE_DEF;
}

function convertValue(valueType: ValueDefinition, value: any): any {
    if (value) {
        if (valueType.type == GeglValueType.COLOR) {
            return convertColorFromString(value);
        }
    }
    return value;
}

function buildProperties(properties): PropertyDefinition[] {
    return properties.map(property => {
        const type = buildType(property);
        return {
            type: PropertyType.INPUT,
            label: normalizeLabel(property.nick, property.id),
            linkable: false,
            editable: true,
            valueType: type,
            defaultValue: convertValue(type, property.def)
        };
    });
}

function buildDefinitions(): NodeDefinition[] {
    return gegl.map(operation => {
        return ({
            id: operation.name,
            label: normalizeLabel(operation.title, operation.name),
            categories: operation.categories,
            properties: buildPorts(operation.inputs, PropertyType.INPUT)
                .concat(buildPorts(operation.outputs, PropertyType.OUTPUT))
                .concat(buildProperties(operation.properties))
        });
    });
}

const colorPropertyHandler: PropertyHandler = {
    handlerMouseDown(editor: Editor, event: Event, property: NodeProperty): State {
        const position = editor.getScreenPosition(property.globalBounds().bottomLeft());
        return editor.openSelector(position, 'select-color', {
            value: property.value,
            execute(value) {
                editor.emit(new ChangePropertyValueCommand(property, value));
                editor.unlockState();
            }
        });
    },

    layout(renderer: Renderer, property: NodeProperty) {
        const m = renderer.context.measureText(property.definition.label);
        property.bounds = new Point(0, 0).rect(m.width + renderer.style.unit * (3.5 + 2*2 + 4), renderer.style.unit * 4);
    },

    draw(renderer: Renderer, property: NodeProperty) {
        const propBounds = property.globalBounds();
        const style = renderer.style;
        renderer.drawText(propBounds.origin.offset(style.unit * 3.5, style.unit * 3),
            rgb(renderer.theme.TEXT_COLOR), property.definition.label);
        const colorRect = propBounds.topRight().offset(style.unit * -6, 0).rect(style.unit * 4, style.unit * 4);
        renderer.roundBox()
            .filled(rgb(property.value))
            .draw(colorRect);
    }
}

export const nodeDefinitions = buildDefinitions();

export class GeglGraphicalHelper implements GraphicalHelper {

    getHeaderColor(node: Node): Color {
        if (node.definition.categories && node.definition.categories.startsWith("programming:")) {
            return { r: 0xfc, g: 0x83, b: 0x47 }; // orange
        }
        if (node.definition.id == "gegl:add") {
            // return { r: 0xcc, g: 0x29, b: 0x3e }; // red
            // return {r: 0xaa, g: 0x26, b: 0x31 }; // dark red 
            return {r: 0x85, g: 0x67, b: 0xc6 }; // purple
        }
        return { r: 0x00, g: 0xc9, b: 0x8a }; // green
    }
    
    getConnectorColor(property: NodeProperty): Color {
        const valueDef = property.definition.valueType;
        if (valueDef.type == GeglValueType.IMAGE) {
            return { r: 0xc7, g: 0xc7, b: 0x29 };
        }
        /*if (valueDef.type == GeglValueType.UV) {
            return { r: 0x63, g: 0x63, b: 0xc7 };
        }
        if (valueDef.type == GeglValueType.SHADER) {
            return { r: 0x63, g: 0xc7, b: 0x63 };
        }*/
        return { r: 0xa1, g: 0xa1, b: 0xa1 };
    }

    getPropertyHandler(property: NodeProperty) {
        if (property.definition.valueType.type == GeglValueType.COLOR) {
            return colorPropertyHandler;
        }
        return getDefaultPropertyHandler(property);
    }
}