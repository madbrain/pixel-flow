import { Editor, Event, Node, NodeProperty, ControlKey, VisualFeedback, SelectionMode, NodeConnection } from "./editor";
import { Point, Rectangle } from "./geometry";
import { StyleDimension } from "./renderer";
import { MoveNodeCommand as MoveNodesCommand, ToggleCollapseCommand, CreateConnectionCommand, RemoveConnectionCommand,
    CompositeCommand, AddNodeCommand } from "./commands";

export class State {
    handleMouseMove(editor: Editor, event: Event): State {
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        return this;
    }

    handleMouseDown(editor: Editor, event: Event): State {
        return this;
    }

    handleMouseWheel(editor: Editor, event: Event): State {
        return this;
    }
}

function findConnectorOfNode(node: Node, position: Point, style: StyleDimension): NodeProperty {
    const connectors = node.properties.filter(prop => {
        if (prop.definition.linkable) {
            const center = prop.connector.add(node.bounds.origin);
            return center.distance(position) <= style.connectorRadius;
        }
    });
    return connectors.length > 0 ? connectors[0] : null;
}

function findConnector(nodes: Node[], position: Point, style: StyleDimension): NodeProperty {
    for (let node of nodes) {
        const connector = findConnectorOfNode(node, position, style);
        if (connector != null) {
            return connector; 
        }
    }
    return null;
}

function toSelectionMode(keys: number) {
    if ((keys & ControlKey.ShiftKey) != 0) {
        return SelectionMode.ADD;
    } else if ((keys & ControlKey.CtrlKey) != 0) {
        return SelectionMode.REMOVE;
    } else {
        return SelectionMode.REPLACE;
    }
}

function snap(point: Point, event: Event, snapSize: number) {
    if ((event.specialKeys & ControlKey.ShiftKey) != 0) {
        return new Point(Math.ceil(point.x / snapSize) * snapSize, Math.ceil(point.y / snapSize) * snapSize); 
    }
    return point;
}

export class IdleState extends State {
    handleMouseDown(editor: Editor, event: Event): State {
        if (event.specialKeys & ControlKey.AltKey) {
            return new DragPanningState(event.position);
        }
        for (let node of editor.nodeGroup.nodes) {
            // TODO compute a special node bounds containing connectors to speed up detection
            const connector = findConnectorOfNode(node, event.position, editor.renderer.style);
            if (connector != null) {
                editor.select([node]);
                return new DragConnectionState(editor, connector, event.position);
            } else if (node.bounds.contains(event.position)) {
                const collapseArrowSize = editor.renderer.style.collapseArrowSize;
                const arrowBounds = node.collapseArrowCenter.rectCentered(collapseArrowSize, collapseArrowSize);
                if (arrowBounds.contains(event.position)) {
                    return new ToggleCollapseState(node);
                } else if (node.labelBounds.contains(event.position)) {
                    if (! editor.isSelected(node)) {
                        editor.select([node], toSelectionMode(event.specialKeys));
                        editor.draw();
                    }
                    return new StartDragNodesState(event.position);
                } else {
                    const properties = node.properties.filter(property => property.bounds.move(node.bounds.origin).contains(event.position));
                    if (properties.length > 0) {
                        const property = properties[0];
                        const handler = editor.renderer.graphicalHelper.getPropertyHandler(property);
                        if (handler) {
                            return handler.handlerMouseDown(editor, event, property);
                        }
                        return this;
                    }
                    console.log("TODO resize on border", node);
                    return this;
                }
            }
        }
        return new DragSelectionBoxState(editor, event.position);
    }

    handleMouseWheel(editor: Editor, event: Event): State {
        // TODO adjust zoom panning
        // https://stackoverflow.com/questions/2916081/zoom-in-on-a-point-using-scale-and-translate
        const zoomIntensity = 0.9;
        const zoomFactor = event.deltaY > 0 ? 1 / zoomIntensity : zoomIntensity;
        const offset = event.position.scale(zoomFactor - 1);
        editor.zoomState = { origin: editor.zoomState.origin.sub(offset), scale: editor.zoomState.scale / zoomFactor };
        editor.draw();
        return this;
    }
}

class PendingConnectionFeedback implements VisualFeedback {

    toProperty: NodeProperty = null;
    
    constructor(private fromProperty: NodeProperty, private toPoint: Point) {}

    update(toProperty: NodeProperty, position: Point) {
        this.toProperty = toProperty;
        this.toPoint = position;
    }

    draw(editor: Editor) {
        let toPos = this.toPoint;
        let color = editor.renderer.theme.NODE_BACK_COLOR;
        if (this.toProperty != null && editor.canConnect(this.fromProperty, this.toProperty)) {
            toPos = this.toProperty.connector.add(this.toProperty.node.bounds.origin);
            color = editor.renderer.theme.SELECTION_COLOR;
        }
        const fromPos = this.fromProperty.connector.add(this.fromProperty.node.bounds.origin);
        editor.renderer.drawConnection(fromPos, toPos, color);
    }
}

class DragConnectionState extends State {
    feedback: PendingConnectionFeedback;
    previousConnection: NodeConnection = null;

    constructor (editor: Editor, private fromProperty: NodeProperty, startPoint: Point) {
        super();
        if (fromProperty.isConnected()) {
            this.previousConnection = fromProperty.connections[0];
            this.previousConnection.disconnect();
            this.fromProperty = this.previousConnection.opposite(fromProperty);
        }
        this.feedback = new PendingConnectionFeedback(this.fromProperty, startPoint)
        editor.addFeedback(this.feedback);
        editor.draw();
    }

    handleMouseMove(editor: Editor, event: Event): State {
        const toProperty = findConnector(editor.nodeGroup.nodes, event.position, editor.renderer.style);
        this.feedback.update(toProperty, event.position);
        editor.draw();
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        editor.removeFeedback(this.feedback);
        const toProperty = findConnector(editor.nodeGroup.nodes, event.position, editor.renderer.style);
        const createCommand = toProperty != null && editor.canConnect(this.fromProperty, toProperty)
                ? new CreateConnectionCommand(this.fromProperty, toProperty) : null;
        if (this.previousConnection == null) {
            if (createCommand != null) {
                editor.emit(createCommand);
            }
        } else {
            const disconnectCommand = new RemoveConnectionCommand(this.previousConnection);
            if (createCommand == null) {
                editor.emit(disconnectCommand);
            } else if (toProperty == this.previousConnection.opposite(this.fromProperty)) {
                // no action actually
                this.previousConnection.connect();
            } else {
                editor.emit(new CompositeCommand([ disconnectCommand, createCommand ]));
            }
        }
        editor.draw();
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }

}

class SelectionBoxFeedback implements VisualFeedback {
    
    toPosition: Point;
    bounds: Rectangle;
    
    constructor(private fromPosition: Point) {
        this.update(fromPosition);
    }

    draw(editor: Editor) {
        editor.renderer.drawSelection(this.bounds);
    }

    update(position: Point) {
        this.toPosition = position;
        this.bounds = this.fromPosition.rectTo(this.toPosition);
    }
}

class DragSelectionBoxState extends State {

    feedback: SelectionBoxFeedback;
    originalSelection: Node[];

    constructor (editor: Editor, startPoint: Point) {
        super();
        this.originalSelection = editor.selection.concat([]);
        this.feedback = new SelectionBoxFeedback(startPoint)
        editor.addFeedback(this.feedback);
        editor.draw();
    }

    private updateSelection(editor: Editor, event: Event) {
        let selectedNodes = editor.nodeGroup.nodes.filter(node => {
            return this.feedback.bounds.containsRect(node.bounds);
        });
        const mode = toSelectionMode(event.specialKeys);
        if (mode == SelectionMode.ADD) {
            this.originalSelection.forEach(node => {
                if (selectedNodes.indexOf(node) < 0) {
                    selectedNodes.push(node);
                }
            });
        } else if (mode == SelectionMode.REMOVE) {
            selectedNodes = this.originalSelection.filter(node => selectedNodes.indexOf(node) < 0);         
        }
        editor.select(selectedNodes, SelectionMode.REPLACE);
    }

    handleMouseMove(editor: Editor, event: Event): State {
        this.feedback.update(event.position);
        this.updateSelection(editor, event);
        editor.draw();
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        this.updateSelection(editor, event);
        editor.removeFeedback(this.feedback);
        editor.draw();
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }
}

class StartDragNodesState extends State {
    constructor(private startPosition: Point) {
        super();
    }

    handleMouseMove(editor: Editor, event: Event): State {
        const MINIMAL_MOVE = 3;
        if (event.position.distance(this.startPosition) > MINIMAL_MOVE) {
            return new DragNodesState(editor.selection, this.startPosition).handleMouseMove(editor, event);
        }
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        // no move do nothing
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }
}

class DragNodesState extends State {

    originalPositions = new Map<Node, Point>()

    constructor(selection: Node[], private startPosition: Point) {
        super();
        selection.forEach(node => {
            this.originalPositions.set(node, node.bounds.origin);
        });
    }

    handleMouseMove(editor: Editor, event: Event): State {
        editor.selection.forEach(node => {
            const point = this.originalPositions.get(node).add(event.position.sub(this.startPosition));
            node.bounds = node.bounds.moveTo(snap(point, event, editor.renderer.style.snapSize));
        })
        editor.draw();
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        const moves = editor.selection.map(node => {
            const startPosition = this.originalPositions.get(node);
            const point = this.originalPositions.get(node).add(event.position.sub(this.startPosition));
            const endPosition = snap(point, event, editor.renderer.style.snapSize);
            return { node, startPosition, endPosition }
        })
        editor.emit(new MoveNodesCommand(moves));
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }

}

class ToggleCollapseState extends State {
    constructor(private node: Node) {
        super();
    }

    handleMouseMove(editor: Editor, event: Event): State {
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        editor.emit(new ToggleCollapseCommand(this.node));
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }

}

class DragPanningState extends State {

    constructor(private startPoint: Point) {
        super();
    }

    handleMouseMove(editor: Editor, event: Event): State {
        editor.zoomState = {
            origin: editor.zoomState.origin.add(this.startPoint.sub(event.position)),
            scale: editor.zoomState.scale
        };
        editor.draw();
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        return new IdleState();
    }

    handleMouseDown(editor: Editor, event: Event): State {
        // should not happen, in case return to Idle
        return new IdleState();
    }

}

export class AddNodeState extends State {

    constructor(private node: Node) {
        super();
    }

    handleMouseMove(editor: Editor, event: Event): State {
        this.node.bounds = this.node.bounds.moveTo(snap(event.position, event, editor.renderer.style.snapSize));
        editor.draw();
        return this;
    }

    handleMouseUp(editor: Editor, event: Event): State {
        editor.emit(new AddNodeCommand(this.node));
        return new IdleState();
    }

}

export class WaitSelectorCloseState extends State {

}