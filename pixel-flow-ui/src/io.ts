
import { Node, NodeGroup, NodeConnection } from './editor';
import { NodeFactory } from './nodes'
import { Point } from './geometry';

export interface PointIO {
    x: number;
    y: number;
}

export interface PropertyReferenceIO {
    node: string;
    property: number;
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
    propertyValues: any[];
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
        nodeIO.propertyValues.forEach((value, i) => {
            node.properties[i].value = value;
        });
    });

    nodeGroup.connections.forEach(connectionIO => {
        const from = nodeById[connectionIO.from.node].properties[connectionIO.from.property];
        const to = nodeById[connectionIO.to.node].properties[connectionIO.to.property];
        const connection = new NodeConnection(from, to);
        connection.connect();
    });

    return { nodes };
}