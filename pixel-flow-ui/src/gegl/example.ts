import { NodeGroupIO } from "../io";

export const example1: NodeGroupIO = {
    "nodes": [
        {"id":"node0","type":"gegl:buffer-source","collapsed":false,"location":{"x":55.594010711617216,"y":155.73917769386458},"properties": [] },
        {"id":"node1","type":"gegl:brightness-contrast","collapsed":false,"location":{"x":355.5940107116172,"y":155.73917769386458},"properties": [] },
        {"id":"node2","type":"gegl:pixelize","collapsed":false,"location":{"x":655.5940107116172,"y":155.73917769386458},"properties": [] },
        {"id":"node3","type":"gegl:component-extract","collapsed":false,"location":{"x":340.3436145151037,"y":430.15439163998184},"properties": [] },
        {"id":"node4","type":"gegl:buffer-sink","collapsed":false,"location":{"x":1197.8953048448654,"y":330.5746099448043},"properties": [] },
        {"id":"node5","type":"gegl:add","collapsed":false,"location":{"x":926.127032884854,"y":529.2469258991142},"properties": [] }
    ],
    // TODO correct property reference
    "connections":[
        {"from":{"node":"node0","property":"0"},"to":{"node":"node1","property":"0"}},
        {"from":{"node":"node0","property":"0"},"to":{"node":"node3","property":"0"}},
        {"from":{"node":"node1","property":"1"},"to":{"node":"node2","property":"0"}},
        {"from":{"node":"node2","property":"1"},"to":{"node":"node5","property":"0"}},
        {"from":{"node":"node3","property":"1"},"to":{"node":"node5","property":"1"}},
        {"from":{"node":"node4","property":"0"},"to":{"node":"node5","property":"2"}}
    ]
};

export const example: NodeGroupIO = {
    "nodes":[
        {"id":"node6","type":"gegl:png-load","collapsed":false,"location":{"x":110,"y":317},"properties": [] },
        {"id":"node3","type":"gegl:component-extract","collapsed":false,"location":{"x":482.3436145151037,"y":104.15439163998184},"properties": [] },
        {"id":"node1","type":"gegl:edge","collapsed":false,"location":{"x":488,"y":551},"properties": [] },
        {"id":"node4","type":"gegl:add","collapsed":false,"location":{"x":807,"y":307},"properties": [] },
        {"id":"node7","type":"gegl:png-save","collapsed":false,"location":{"x":1101,"y":288},"properties": [] }
    ],
    "connections":[
        {"from":{"node":"node6","property": "output"},"to":{"node":"node3","property": "input"}},
        {"from":{"node":"node3","property": "1"},"to":{"node":"node4","property": "0"}},
        {"from":{"node":"node6","property": "output"},"to":{"node":"node1","property": "0"}},
        {"from":{"node":"node1","property": "1"},"to":{"node":"node4","property": "1"}},
        {"from":{"node":"node4","property": "2"},"to":{"node":"node7","property": "0"}}
    ]
};