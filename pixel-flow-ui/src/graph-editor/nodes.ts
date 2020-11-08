import { Node } from "./editor";
import { Point } from "./geometry";
import { ValueDefinition } from './value';

export enum PropertyType {
    INPUT,
    OUTPUT,
    // NEW_INPUT
    // NEW_OUTPUT
}

export interface PropertyDefinition {
    type: PropertyType;
    id: string,
    label: string;
    linkable?: boolean;
    editable?: boolean;
    valueType: ValueDefinition;
    defaultValue?: any;
}

export interface NodeDefinition {
    id: string;
    label: string;
    categories?: string;
    properties: PropertyDefinition[]
}

export class NodeFactory {
    private nodeDefinitionByType: { [key: string]: NodeDefinition } = {};

    constructor (private nodeDefinitions: NodeDefinition[]) {
        nodeDefinitions.forEach(nodeDefinition => {
            this.nodeDefinitionByType[nodeDefinition.id] = nodeDefinition;
        });
    }

    createNode(type: string, id: string, location: Point): Node {
        const nodeDefinition = this.nodeDefinitionByType[type];
        if (! nodeDefinition) {
            throw new Error(`unknown node type ${type}`);
        }
        return new Node(id, nodeDefinition, location);
    }

    getNodeDefinitions() {
        return this.nodeDefinitions;
    }

}