import { Rectangle, Point, Dimension } from "./geometry";
import { Renderer, rgb, Corner, Direction, ZoomState } from "./renderer";
import { defaultPropertyHandler } from "./handlers";
import { State, IdleState, AddNodeState, WaitSelectorCloseState } from "./states";
import { NodeDefinition, NodeFactory, PropertyDefinition, PropertyType } from './nodes';
import { DeleteNodesCommand } from './commands';
import { buildTreeFromDefinitions } from "./tree";

// =============== Model

export interface ExternalClient {
    openSelector(position: Point, type: string, context: any);
    onChangeGraph(isVisual: boolean, nodeGroup: NodeGroup);
}

export enum ControlKey {
    CtrlKey  = 1,
    AltKey   = 2,
    ShiftKey = 4,
}

export interface Event {
    position: Point;
    screenPosition: Point;
    specialKeys: number;
    deltaY?: number;
    key?: string;
}

export interface Command {
    isVisual: boolean;
    execute(editor: Editor);
    undo(editor: Editor);
    redo(editor: Editor);
}

export class NodeProperty {
   
    bounds: Rectangle; // relative to parent node position
    connector: Point;  // relative to parent node position
    value: any;
    connections: NodeConnection[] = [];

    constructor(public definition: PropertyDefinition, public node: Node) {
        this.value = definition.defaultValue; // TODO make a copy
    }

    isConnected() {
        return this.connections.length > 0;
    }
    
    isEditable() {
        if (! this.definition.editable) return false;
        return !(this.definition.type == PropertyType.INPUT && this.isConnected()); 
    }

    globalBounds() {
        return this.bounds.move(this.node.bounds.origin);
    }

    getValue() {
        // TODO if input and connected get other side value
        return this.value;
    }

    connectTo(connection: NodeConnection) {
        if (this.connections.indexOf(connection) < 0) {
            this.connections.push(connection);
        }
    }

    disconnectFrom(connection: NodeConnection) {
        const pos = this.connections.indexOf(connection);
        if (pos >= 0) {
            this.connections.splice(pos, 1);
        }
    }
    
}

export class Node {
    
    bounds: Rectangle;
    collapsed: boolean = false;
    properties: NodeProperty[];

    // computed to accelerated drawing and hit detection
    labelBounds: Rectangle;
    collapseArrowCenter: Point;
    fullWidth = 200;

    constructor(public id: string, public definition: NodeDefinition, location: Point) {
        this.bounds = location.rect(0, 0);
        this.properties = definition.properties.map(def => new NodeProperty(def, this));
    }

    findProperty(propName: string): NodeProperty {
        return this.properties.find(property => property.definition.id === propName);
    }
}

export class NodeConnection {
    
    constructor(public from: NodeProperty, public to: NodeProperty) {}

    connect() {
        this.from.connectTo(this);
        this.to.connectTo(this);
    }

    disconnect() {
        this.from.disconnectFrom(this);
        this.to.disconnectFrom(this);
    }

    opposite(property: NodeProperty): NodeProperty {
        if (this.from == property) {
            return this.to;
        } else if (this.to == property) {
            return this.from;
        } else {
            return null;
        }
    }
}

export interface NodeGroup {
    nodes: Node[];
}

// ========================

function drawProperty(renderer: Renderer, origin: Point, prop: NodeProperty) {
    if (prop.isEditable()) {
        const handler = renderer.graphicalHelper.getPropertyHandler(prop);
        if (handler) {
            handler.draw(renderer, prop);
        } else {
            // default just in case but should not be used as property is editable
            console.log("no handler for drawing", prop);
            defaultPropertyHandler.draw(renderer, prop);
        }
    } else {
        // not editable: just the label
        defaultPropertyHandler.draw(renderer, prop);
    }
    
    // connectors
    if (prop.definition.linkable) {
        renderer.drawConnector(prop.connector.add(origin), rgb(renderer.graphicalHelper.getConnectorColor(prop)));
    }
}

function drawNodeFull(editor: Editor, node: Node) {
    const renderer = editor.renderer;
    const style = renderer.style;

    // TODO header and body should not overlap => header color not the same when collapsed
    renderer.roundBox()
        .filled(rgb(renderer.theme.NODE_BACK_COLOR, renderer.theme.NODE_COLOR_ALPHA))
        .shadow()
        .draw(node.bounds);
    renderer.roundBox()
        .filled(rgb(renderer.graphicalHelper.getHeaderColor(node), renderer.theme.NODE_COLOR_ALPHA))
        .corners(Corner.TopLeft | Corner.TopRight)
        .draw(node.labelBounds);

    renderer.roundBox()
        .line(editor.isSelected(node) ? 3 : 1)
        .stroke(rgb(editor.isSelected(node) ? renderer.theme.SELECTION_COLOR : renderer.theme.BORDER_COLOR))
        .draw(node.bounds);

    // TODO clip

    renderer.drawArrow(node.collapseArrowCenter, style.collapseArrowSize, Direction.DOWN, rgb(renderer.theme.TEXT_COLOR, 0.5));
    renderer.drawText(node.collapseArrowCenter.offset(style.unit * 2.5, style.unit), rgb(renderer.theme.TEXT_COLOR), node.definition.label)
    
    if (node.definition.preview) {
        const origin = node.bounds.origin.offset(0, renderer.style.headerHeight);
        node.definition.preview.draw(renderer, node, origin);
    }
    node.properties.forEach(prop => {
        drawProperty(renderer, node.bounds.origin, prop);
    });

}

function drawNodeCollapsed(editor: Editor, node: Node) {
    const renderer = editor.renderer;
    const style = renderer.style;
    const radius = node.bounds.dimension.height / 2;

    renderer.roundBox(radius)
        .filled(rgb(renderer.graphicalHelper.getHeaderColor(node), renderer.theme.NODE_COLOR_ALPHA))
        .shadow()
        .draw(node.bounds);

    renderer.roundBox(radius)
        .line(editor.isSelected(node) ? 3 : 1)
        .stroke(rgb(editor.isSelected(node) ? renderer.theme.SELECTION_COLOR : renderer.theme.BORDER_COLOR))
        .draw(node.bounds);

    // TODO clip

    renderer.drawArrow(node.collapseArrowCenter, style.collapseArrowSize, Direction.RIGHT, rgb(renderer.theme.TEXT_COLOR, 0.5));
    renderer.drawText(node.collapseArrowCenter.offset(style.unit * 2.5, style.unit), rgb(renderer.theme.TEXT_COLOR), node.definition.label)
    
    node.properties.forEach(prop => {
        if (prop.definition.linkable) {
            const position = prop.connector.add(node.bounds.origin);
            renderer.drawConnector(position, rgb(renderer.graphicalHelper.getConnectorColor(prop)));
        }
    });
}

function layoutNodeFull(renderer: Renderer, node: Node) {
    node.properties.forEach(prop => {
        const handler = renderer.graphicalHelper.getPropertyHandler(prop);
        if (handler) {
            handler.layout(renderer, prop);
        } else {
            console.log("No handler to layout property", prop);
        }
    });
    let width = node.fullWidth;
    node.properties.forEach(prop => {
        width = Math.max(width, prop.bounds.dimension.width);
    });
    
    const MINIMAL_NODE_WIDTH = 200;
    width = Math.max(MINIMAL_NODE_WIDTH, width);
    node.fullWidth = width;

    let previewDimension = new Dimension(0, 0);
    if (node.definition.preview) {
        previewDimension = node.definition.preview.layout(node);
    }
    let y = renderer.style.headerHeight + previewDimension.height;
    node.properties.forEach((prop, i) => {
        if (i > 0) {
            y += renderer.style.unit / 2;
        }
        const propHeight = prop.bounds.dimension.height;
        prop.bounds = new Point(0, y).rect(width, propHeight);
        prop.connector = prop.definition.type == PropertyType.INPUT ? prop.bounds.middleLeft() : prop.bounds.middleRight();
        y += propHeight;
    });
    node.bounds = node.bounds.origin.rect(width, y + renderer.style.unit);
    node.labelBounds = node.bounds.withHeight(renderer.style.headerHeight);
    node.collapseArrowCenter = node.bounds.origin.offset(renderer.style.unit * 2, renderer.style.unit * 2.5);
}

function layoutNodeCollapsed(renderer: Renderer, node: Node) {
    let numIn = 0;
    let numOut = 0;
    node.properties.filter(prop => prop.definition.linkable).forEach((prop, i) => {
        if (prop.definition.type == PropertyType.INPUT) {
            numIn++;
        } else {
            numOut++;
        }
    });
    let numTotal = Math.max(numIn, numOut);
    let hiddenRadius = renderer.style.unit * 3;
    if (numTotal > 4) {
	    hiddenRadius += renderer.style.unit * (numTotal - 4);
    }
    let width = renderer.context.measureText(node.definition.label).width + renderer.style.unit * 3 + hiddenRadius * 2;
    // TODO save collapseWidth

    const inCenter = new Point(hiddenRadius, hiddenRadius);
    const outCenter = new Point(width - hiddenRadius, hiddenRadius);
    const inAngleStep = Math.PI / (1.0 + numIn);
    const outAngleStep = -Math.PI / (1.0 + numOut);
    let inAngle = Math.PI / 2 + inAngleStep;
    let outAngle = Math.PI / 2 + outAngleStep;
    node.properties.filter(prop => prop.definition.linkable).forEach(prop => {
        if (prop.definition.type == PropertyType.INPUT) {
            prop.connector = inCenter.offset(Math.cos(inAngle) * hiddenRadius, -Math.sin(inAngle) * hiddenRadius);
            inAngle += inAngleStep;
        } else {
            prop.connector = outCenter.offset(Math.cos(outAngle) * hiddenRadius, -Math.sin(outAngle) * hiddenRadius);
            outAngle += outAngleStep;
        }
    });
	
    node.bounds = node.bounds.origin.rect(width, hiddenRadius * 2);
    node.labelBounds = node.bounds;
    node.collapseArrowCenter = node.bounds.origin.offset(hiddenRadius + renderer.style.unit, hiddenRadius);
}

function layoutNode(renderer: Renderer, node: Node) {
    if (node.collapsed) {
        layoutNodeCollapsed(renderer, node);
    } else {
        layoutNodeFull(renderer, node);
    }
}

export enum SelectionMode {
    ADD,
    REMOVE,
    REPLACE
}

export interface VisualFeedback {
    draw(editor: Editor);
}

class CommandStack {
    commands: Command[] = [];
    undoIndex = -1;

    constructor(private editor: Editor) {}

    emit(command: Command) {
        const MAX_UNDO = 20;
        if (this.undoIndex < this.commands.length-1) {
            const diff = this.commands.length - this.undoIndex ;
            this.commands.splice(this.undoIndex + 1, diff);
        }
        this.commands.push(command);
        this.undoIndex += 1;
        if (this.commands.length > MAX_UNDO) {
            this.commands.splice(0, this.commands.length - MAX_UNDO);
            this.undoIndex = this.commands.length - 1;
        }
        command.execute(this.editor);
        this.editor.changeGraph(command.isVisual);
    }

    undo() {
        if (this.undoIndex >= 0) {
            const command = this.commands[this.undoIndex];
            command.undo(this.editor);
            this.undoIndex -= 1;
            this.editor.changeGraph(command.isVisual);
        }
    }

    redo() {
        if (this.undoIndex < (this.commands.length-1)) {
            this.undoIndex += 1;
            const command = this.commands[this.undoIndex];
            command.redo(this.editor);
            this.editor.changeGraph(command.isVisual);
        }
    }
}

export class Editor {
    

    debug = false;
    mousePosition = new Point(0, 0);
    selection: Node[] = [];
    zoomState = new ZoomState(new Point(0, 0), 1.0);
    state: State = new IdleState();
    commandStack = new CommandStack(this);
    feedbacks: VisualFeedback[] = [];
    nodeGroup: NodeGroup = { nodes: [] };

    constructor(public renderer: Renderer,
            private nodeFactory: NodeFactory,
            private externalClient: ExternalClient) { }

    draw() {
        this.renderer.context.save();
        this.renderer.clearScreen(this.renderer.theme.BACKGROUND_COLOR);
    
        this.renderer.setProjection(this.zoomState);
     
        // background overlay (result image, etc.)
    
        this.renderer.drawGrid(this.zoomState, this.renderer.theme.BORDER_COLOR, this.renderer.style.snapSize, 5, 2);
        
        // draw current node group bread crumb
        
        // draw frames rectangle + label
    
        // TODO temp should be done only at start or on change
        this.nodeGroup.nodes.forEach(node => {
            layoutNode(this.renderer, node);
        });
    
        // draw connections
        this.nodeGroup.nodes.forEach(node => {
            node.properties.filter(prop => prop.definition.type == PropertyType.OUTPUT)
                .forEach(prop => {
                    if (prop.connections) {
                        prop.connections.forEach(connection => {
                            const fromPos = connection.from.connector.add(connection.from.node.bounds.origin);
                            const toPos = connection.to.connector.add(connection.to.node.bounds.origin);
                            const selected = this.isSelected(connection.from.node) || this.isSelected(connection.to.node);
                            this.renderer.drawConnection(fromPos, toPos, selected
                                ? this.renderer.theme.SELECTION_COLOR : this.renderer.theme.NODE_BACK_COLOR);
                        });
                    }
                });
        });
        this.feedbacks.forEach(feedback => {
            feedback.draw(this);
        });
    
        // draw nodes
        this.nodeGroup.nodes.forEach(node => {
            if (node.collapsed) {
                drawNodeCollapsed(this, node);
            } else {
                drawNodeFull(this, node);
            }
        });
        this.renderer.context.restore();
    }

    addFeedback(feedback: VisualFeedback) {
        this.feedbacks.push(feedback);
    }

    removeFeedback(feedback: VisualFeedback) {
        this.feedbacks.splice(this.feedbacks.indexOf(feedback), 1);
    }

    createNode(nodeType: string) {
        // TODO generate proper id
        const node = this.nodeFactory.createNode(nodeType, "node" + (this.nodeGroup.nodes.length), this.mousePosition);
        this.nodeGroup.nodes.push(node);
        this.select([node]);
        this.state = new AddNodeState(node);
        this.draw();
    }

    createConnection(fromProperty: NodeProperty, toProperty: NodeProperty): NodeConnection {
        // TODO in GEGL connection has to be from OUTPUT to INPUT => should delegate to NodeFactory
        function findConnection(type: PropertyType) {
            if (fromProperty.definition.type == type) {
                return fromProperty;
            }
            return toProperty;
        }
        return new NodeConnection(findConnection(PropertyType.OUTPUT), findConnection(PropertyType.INPUT));
    }

    setNodeGroup(nodeGroup: NodeGroup) {
        this.nodeGroup = nodeGroup;
        this.draw();
    }

    onWorkspaceEvent(event: { type: string, arg: any }) {
        if (event.type === 'update-preview') {
            this.nodeGroup.nodes.forEach(node => {
                if (node.definition.preview) {
                    node.definition.preview.update(this, node, event.arg);
                }
            });
        }
    }

    changeGraph(isVisual: boolean) {
        this.externalClient.onChangeGraph(isVisual, this.nodeGroup);
    }

    emit(command: Command) {
        this.commandStack.emit(command);
    }

    isSelected(node: Node) {
        return this.selection.indexOf(node) >= 0;
    }

    select(nodes: Node[], mode: SelectionMode = SelectionMode.REPLACE) {
        if (mode == SelectionMode.ADD) {
            nodes.forEach(node => {
                if (this.selection.indexOf(node) < 0) {
                    this.selection.push(node);
                }
            });
        } else if (mode == SelectionMode.REMOVE) {
            nodes.forEach(node => {
                const pos = this.selection.indexOf(node);
                if (pos >= 0) {
                    this.selection.splice(pos, 1);
                }
            });
        } else {
            this.selection = nodes;
        }
    }

    canConnect(fromProperty: NodeProperty, toProperty: NodeProperty) {
        if (fromProperty.node == toProperty.node
                || fromProperty.definition.type == toProperty.definition.type) {
            return false;
        }
        // TODO call helper to restrict even further possible connection
        return true;
    }

    handleKeyPress(event: Event) {
        // TODO should be transferred to IdleState
        if ((event.specialKeys & ControlKey.CtrlKey) != 0 && event.key == 'z') {
            this.commandStack.undo();
        } else if ((event.specialKeys & ControlKey.CtrlKey) != 0 && event.key == 'y') {
            this.commandStack.redo();
        } else if ((event.specialKeys & ControlKey.CtrlKey) != 0 && event.key == 'b') {
            this.selection = [].concat(this.nodeGroup.nodes);
            this.draw();
        } else if ((event.specialKeys & ControlKey.ShiftKey) != 0 && event.key == 'H') {
            this.debug = ! this.debug;
            this.draw();
        } else if ((event.specialKeys & ControlKey.ShiftKey) != 0 && event.key == 'A') {
            this.openSelector(this.mousePosition, 'select-tree', {
                nodes: buildTreeFromDefinitions(this.nodeFactory.getNodeDefinitions()),
                execute: (value) => {
                    this.createNode(value.name);
                }
            });
            this.state = new WaitSelectorCloseState();
        } else if (event.key == "Delete") {
            if (this.selection.length > 0) {
                const nodes = this.selection;
                this.selection = [];
                this.emit(new DeleteNodesCommand(nodes));
            }
        }
        this.debugState("KEY");
    }

    openSelector(position: Point, type: string, context: any = {}): State {
        if (this.externalClient.openSelector(position, type, context)) {
            return new WaitSelectorCloseState();
        }
        console.log("Unknown selector", type, context);
        return new IdleState();
    }

    doAction(position: Point, action: string) {
        this.state = this.openSelector(position, action, {});
    }

    handleMouseDown(event: Event) {
        this.state = this.state.handleMouseDown(this, this.scalePosition(event));
        this.debugState("MOUSE DOWN");
    }
    
    handleMouseUp(event: Event) {
        this.state = this.state.handleMouseUp(this, this.scalePosition(event));
        this.debugState("MOUSE UP");
    }
    
    handleMouseMove(event: Event) {
        this.mousePosition = event.position;
        this.state = this.state.handleMouseMove(this, this.scalePosition(event));
        this.debugState("MOUSE MOVE");
    }
    
    handleMouseWheel(event: Event) {
        this.state = this.state.handleMouseWheel(this, this.scalePosition(event));
        this.debugState("MOUSE WHEEL");
    }

    unlockState() {
        this.state = new IdleState();
        this.debugState("UNLOCK");
    }

    closeSelector(result) {
        if (result) {
            result.context.execute(result.value);
        } else {
            this.unlockState();
        }
    }

    private scalePosition(event: Event): Event {
        event.screenPosition = event.position;
        event.position = this.renderer.getPosition(this.zoomState, event.position);
        return event;
    }

    getScreenPosition(position: Point): Point {
        return new Point((position.x - this.zoomState.origin.x) * this.zoomState.scale,
            (position.y - this.zoomState.origin.y) * this.zoomState.scale);
    }

    private debugState(msg: string) {
        if (this.debug) {
            let position = new Point(10, this.renderer.size.height - 20);
            this.renderer.roundBox()
                .filled(rgb(this.renderer.theme.PROPERTY_COLOR))
                .draw(position.offset(0, -this.renderer.style.unit * 3).rect(400, this.renderer.style.unit * 4));
            this.renderer.drawText(position.offset(10, 0), rgb(this.renderer.theme.TEXT_COLOR), msg + " - " + this.state.constructor.name);
    
            const count = 5;
            position = new Point(this.renderer.size.width - 10, this.renderer.size.height - 20);
            this.renderer.roundBox()
                .filled(rgb(this.renderer.theme.PROPERTY_COLOR))
                .draw(position.offset(-400, -this.renderer.style.unit * (4*count - 1)).rect(400, this.renderer.style.unit * 4*count));
            for (let i = 0; i < Math.min(count, this.commandStack.commands.length); ++i) {
                const command = this.commandStack.commands[this.commandStack.commands.length - 1 - i];
                const isTop = this.commandStack.undoIndex == (this.commandStack.commands.length - 1 - i);
                this.renderer.drawText(position.offset(-400+10, this.renderer.style.unit * 4*(i - count + 1)),
                    rgb(this.renderer.theme.TEXT_COLOR),
                    (isTop ? "*" : " ") + command.constructor.name);
            }
        }
    }
    
}