
import { RxStomp } from '@stomp/rx-stomp';
import { ajax } from 'rxjs/ajax';
import { Subject } from 'rxjs/internal/Subject';
import { pluck, map, debounceTime } from 'rxjs/operators';
import { NodeGroup } from './graph-editor/editor';
import { PropertyType } from './graph-editor/nodes';
import { ValueDefinition } from './graph-editor/value';

const WORKSPACE_KEY = "px-workspace";

export class Workspace {

    private changeSubject = new Subject();
    private rxStomp = new RxStomp();

    constructor(private id: string) {

        this.rxStomp.configure({
            brokerURL: this.createBrokerUrl(),
            /*debug: (msg: string): void => {
                console.log(new Date(), msg);
            }*/
        });
        this.rxStomp.activate();

        this.rxStomp.watch({
            destination: `/topic/workspace/${this.id}`
        }).subscribe(message => {
            const event = JSON.parse(message.body);
            console.log("WORKSPACE EVENT", event);
        });

        this.changeSubject
            .pipe(debounceTime(500))
            .subscribe(graph => {
                this.rxStomp.publish({
                    destination: `/app/workspace/${this.id}/graph`,
                    body: JSON.stringify(graph)
                });
            });
    }

    private createBrokerUrl() {
        const loc = window.location;
        return (loc.protocol === "https:" ? "wss" : "ws") + "://"
            + loc.host + loc.pathname + "api/frontend-ws";
    }

    loadGraph(graphId: string) {
        return ajax({
            url: graphId ? `api/graph/${graphId}` : "api/default-graph",
            responseType: "json"
        }).pipe(pluck("response"));
    }

    loadImageCatalog() {
        return ajax({
            url: `api/workspace/${this.id}/image`
        }).pipe(pluck("response"))
        .pipe(map(catalog => catalog.images.map(image => ({
            id: image.name,
            name: image.name,
            url: `api/workspace/${this.id}/image/${image.name}?${image.modificationTime}`
        }))));
    }

    changeGraph(isVisual: boolean, nodeGroup: NodeGroup) {
        if (! isVisual) {
            this.changeSubject.next(this.buildGraph(nodeGroup));
        }
    }

    private buildGraph(nodeGroup: NodeGroup) {
        const connections = [];
        nodeGroup.nodes.forEach(node => {
            node.properties
                .filter(property => property.definition.type == PropertyType.OUTPUT)
                .forEach(property => {
                    property.connections.forEach(connection => {
                        connections.push({ from: {
                            node: connection.from.node.id,
                            port: connection.from.definition.id
                        }, to: {
                            node: connection.to.node.id,
                            port: connection.to.definition.id
                        } });
                    });
                });
        });
        const nodes = nodeGroup.nodes.map(node => {
            const properties = node.properties
                .filter(property => property.value !== null && property.value !== undefined)
                .map(property => ({
                    name: property.definition.id,
                    value: this.serializeValue(property.definition.valueType, property.value)
                }));
            
            return {
                id: node.id,
                type: node.definition.id,
                collapsed: node.collapsed,
                location: { x: node.bounds.origin.x, y: node.bounds.origin.y },
                properties
            };
        })
        return {nodes, connections};
    }

    private serializeValue(valueType: ValueDefinition, value: any) {
        if (valueType.converter) {
            return valueType.converter.serialize(value);
        }
        return value;
    }
}

export function startWorkspace() {
    let workspaceId = localStorage.getItem(WORKSPACE_KEY);
    return ajax({
        method: "POST",
        url:  "api/workspace",
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            id: workspaceId
        },
        responseType: "json"
    })
        .pipe(pluck("response"))
        .pipe(map(response => {
            const id = response.id;
            localStorage.setItem(WORKSPACE_KEY, id);
            return new Workspace(id);
        }));
}