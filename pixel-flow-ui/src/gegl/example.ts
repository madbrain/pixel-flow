import { NodeGroupIO } from "../io";

export const example1: NodeGroupIO = {
    nodes: [{
        id: "node0",
        type: "gegl:buffer-source",
        //collapsed: true,
        location: { x: 53, y: 124 },
        propertyValues: [
            // TODO put some custom values
        ]
    },
    {
        id: "node1",
        type: "gegl:brightness-contrast",
        //collapsed: true,
        location: { x: 353, y: 124 },
        propertyValues: [
        ]
    },
    {
        id: "node2",
        type: "gegl:pixelize",
        location: { x: 653, y: 124 },
        propertyValues: []
    }],
    connections: [
        { "from": { "node": "node0", "property": 0 }, "to": { "node": "node1", "property": 0 } },
        { "from": { "node": "node1", "property": 1 }, "to": { "node": "node2", "property": 0 } }
    ]
};

export const example: NodeGroupIO = {
    "nodes": [
        {"id":"node0","type":"gegl:buffer-source","collapsed":false,"location":{"x":55.594010711617216,"y":155.73917769386458},"propertyValues":[]},
        {"id":"node1","type":"gegl:brightness-contrast","collapsed":false,"location":{"x":355.5940107116172,"y":155.73917769386458},"propertyValues":[]},
        {"id":"node2","type":"gegl:pixelize","collapsed":false,"location":{"x":655.5940107116172,"y":155.73917769386458},"propertyValues":[]},
        {"id":"node3","type":"gegl:component-extract","collapsed":false,"location":{"x":340.3436145151037,"y":430.15439163998184},"propertyValues":[]},
        {"id":"node4","type":"gegl:buffer-sink","collapsed":false,"location":{"x":1197.8953048448654,"y":330.5746099448043},"propertyValues":[]},
        {"id":"node5","type":"gegl:add","collapsed":false,"location":{"x":926.127032884854,"y":529.2469258991142},"propertyValues":[]}
    ],
    "connections":[
        {"from":{"node":"node0","property":0},"to":{"node":"node1","property":0}},
        {"from":{"node":"node0","property":0},"to":{"node":"node3","property":0}},
        {"from":{"node":"node1","property":1},"to":{"node":"node2","property":0}},
        {"from":{"node":"node2","property":1},"to":{"node":"node5","property":0}},
        {"from":{"node":"node3","property":1},"to":{"node":"node5","property":1}},
        {"from":{"node":"node4","property":0},"to":{"node":"node5","property":2}}
    ]
};
