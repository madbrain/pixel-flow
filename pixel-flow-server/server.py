#!/usr/bin/env python

import asyncio
import websockets
import os
import json
import sys

import gi
gi.require_version('Gegl', '0.4')
from gi.repository import Gegl as gegl


def convertValue(value, paramSpec):
    if paramSpec.value_type.name == "GeglCurve":
        curve = gegl.Curve();
        for point in value["points"]:
            curve.add_point(point["x"], point["y"])
        return curve
    if paramSpec.value_type.name == "GeglColor":
        return gegl.Color.new(value)
    return value


def freeCb(*args):
    print("FREE", args)
    sys.stdout.flush()

def processGraph(graphSpec):
    print ("Process Graph", graphSpec)
    sys.stdout.flush()
    graph = gegl.Node()
    nodeByName = {}
    sinkNodes = []
    for nodeSpec in graphSpec["nodes"]:
        node = graph.create_child(nodeSpec["type"])
        nodeByName[nodeSpec["id"]] = node
        if len(node.list_output_pads()) == 0:
            sinkNodes.append(nodeSpec["id"])
        if "properties" in nodeSpec:
            for property in nodeSpec["properties"]:
                propName = property["name"]
                paramSpec = node.find_property(propName)
                node.set_property(propName, convertValue(property["value"], paramSpec))

    for connectionSpec in graphSpec["connections"]:
        fromSpec = connectionSpec["from"]
        toSpec = connectionSpec["to"]
        nodeByName[fromSpec["node"]].connect_to(fromSpec["port"], nodeByName[toSpec["node"]], toSpec["port"])

    # TODO should test if sinkNodes are connected before process to avoid warning
    print ("Sink Nodes:", sinkNodes)
    for sinkNode in sinkNodes:
        nodeByName[sinkNode].process()

    # check if graph is freed
    graph.weak_ref(freeCb)


def initGegl():
    print ("Initialize GEGL")
    gegl.init([])
    config = gegl.config()
    config.set_property("application-license", "GPL3")
    config.set_property("use-opencl", False)
    #ops = gegl.list_operations()
    #print(ops)


async def syncGraph(websocket, requestId, graph):
    await asyncio.to_thread(processGraph, graph)
    await transmitResponse(websocket, requestId, {})


async def handleMessage(websocket, request):
    if request["jsonrpc"] != "2.0":
        return
    if request["method"] == "graph/sync":
        await syncGraph(websocket, request["id"], request["params"])
    else:
        print (f"MESSAGE {request}")
        sys.stdout.flush()


async def transmitNotification(websocket, method, params):
    request = {
        "jsonrpc": "2.0",
        "method": method,
        "params": params
    }
    await websocket.send(json.dumps(request))


async def transmitResponse(websocket, requestId, result):
    request = {
        "jsonrpc": "2.0",
        "id": requestId,
        "result": result
    }
    await websocket.send(json.dumps(request))


async def main():
    initGegl();
    workspaceId = os.environ['PIXELFLOW_WORKSPACE_ID']
    pixelFlowApiServerURL = os.environ['PIXELFLOW_APISERVER_URL']

    print ("API URL: %s" % pixelFlowApiServerURL)
    print ("Workspace: %s" % workspaceId)
    sys.stdout.flush()
    url = "%s/%s" % (pixelFlowApiServerURL, workspaceId)
    async with websockets.connect(url) as websocket:
        await transmitNotification(websocket, "server/ready",
                { "workspace": workspaceId })
        async for message in websocket:
            request = json.loads(message)
            await handleMessage(websocket, request)


if __name__ == "__main__":
    asyncio.run(main())
