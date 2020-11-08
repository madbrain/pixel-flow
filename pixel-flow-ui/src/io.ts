
import { Node, NodeGroup, NodeConnection } from './graph-editor/editor';
import { NodeFactory } from './graph-editor/nodes'
import { Point } from './graph-editor/geometry';
import { ValueDefinition } from './graph-editor/value';

export interface PointIO {
    x: number;
    y: number;
}

export interface PropertyReferenceIO {
    node: string;
    property: string;
}

export interface NodeConnectionIO {
    from: PropertyReferenceIO;
    to: PropertyReferenceIO;
}

export interface NodeIO {
    id: string;
    type: string;
    collapsed?: boolean;
    location: PointIO;
    fullWidth?: number;
    collapsedWidth?: number;
    properties?: Array<{ name: string, value: any }>;
}

export interface NodeGroupIO {
    nodes: NodeIO[];
    connections: NodeConnectionIO[];
}

export function load(factory: NodeFactory, nodeGroup: NodeGroupIO): NodeGroup {
    const nodeById: { [key: string]: Node } = {};
    const nodes: Node[] = [];
    nodeGroup.nodes.forEach(nodeIO => {
        const collapsed = nodeIO.collapsed === undefined ? false : nodeIO.collapsed;
        const node = factory.createNode(nodeIO.type, nodeIO.id, new Point(nodeIO.location.x, nodeIO.location.y));
        node.collapsed = collapsed;
        nodeById[node.id] = node;
        nodes.push(node);
        if (nodeIO.properties) {
            nodeIO.properties.forEach(propertyIO => {
                const property = node.findProperty(propertyIO.name);
                property.value = deserializeValue(property.definition.valueType, propertyIO.value);
            });
        }
    });
    nodeGroup.connections.forEach(connectionIO => {
        const from = nodeById[connectionIO.from.node].findProperty(connectionIO.from.property);
        const to = nodeById[connectionIO.to.node].findProperty(connectionIO.to.property);
        const connection = new NodeConnection(from, to);
        connection.connect();
    });

    return { nodes };
}

function deserializeValue(valueType: ValueDefinition, value: any) {
    if (valueType.converter) {
        return valueType.converter.deserialize(value);
    }
    return value;
}