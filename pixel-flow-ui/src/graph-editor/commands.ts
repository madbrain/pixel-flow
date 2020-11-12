import { Command, Node, Editor, NodeProperty, NodeConnection } from "./editor";
import { Dimension, Point } from "./geometry";
import { PropertyType } from "./nodes";

export class CompositeCommand implements Command {
    isVisual = false; // TODO also test composite
    constructor(private commands: Command[]) {}

    execute(editor: Editor) {
        this.commands.forEach(command => command.execute(editor));
    }

    undo(editor: Editor) {
        this.commands.forEach(command => command.undo(editor));
    }

    redo(editor: Editor) {
        this.commands.forEach(command => command.redo(editor));
    }

}

export interface NodeMove {
    node: Node;
    startPosition: Point;
    endPosition: Point;
}

export class MoveNodeCommand implements Command {
    isVisual = true;

    constructor(private moves: NodeMove[]) {}

    execute(editor: Editor) {
        this.moves.forEach(move => {
            move.node.bounds = move.node.bounds.moveTo(move.endPosition);
        });
        editor.draw();
    }

    undo(editor: Editor) {
        this.moves.forEach(move => {
            move.node.bounds = move.node.bounds.moveTo(move.startPosition);
        });
        editor.draw();
    }

    redo(editor: Editor) {
        this.execute(editor);
    }

}

export class ToggleCollapseCommand implements Command {
    isVisual = true;

    newCollapsed: boolean;

    constructor(private node: Node) {
        this.newCollapsed = ! node.collapsed;
    }

    execute(editor: Editor) {
        this.node.collapsed = this.newCollapsed;
        editor.draw();
    }

    undo(editor: Editor) {
        this.node.collapsed = ! this.newCollapsed;
        editor.draw();
    }

    redo(editor: Editor) {
        this.execute(editor);
    }

}

export class CreateConnectionCommand implements Command {
    isVisual = false;
    connection: NodeConnection;

    constructor(private fromProperty: NodeProperty, private toProperty: NodeProperty) {}

    execute(editor: Editor) {
        this.connection = editor.createConnection(this.fromProperty, this.toProperty);
        this.connection.connect();
        this.redo(editor);
    }

    undo(editor: Editor) {
        this.connection.disconnect();
        editor.draw();
    }

    redo(editor: Editor) {
        this.connection.connect();
        editor.draw();
    }

}

export class RemoveConnectionCommand implements Command {
    isVisual = false;
    constructor(private connection: NodeConnection) {}

    execute(editor: Editor) {
        this.redo(editor);
    }

    undo(editor: Editor) {
        this.connection.connect();
        editor.draw();
    }

    redo(editor: Editor) {
        this.connection.disconnect();
        editor.draw();
    }

}

export class AddNodeCommand implements Command {
    isVisual = false;
    constructor(private node: Node) {}

    execute(editor: Editor) {
        // already applied
    }

    undo(editor: Editor) {
        const pos = editor.nodeGroup.nodes.indexOf(this.node);
        editor.nodeGroup.nodes.splice(pos, 1);
        editor.draw();
    }

    redo(editor: Editor) {
        editor.nodeGroup.nodes.push(this.node);
        editor.draw();
    }

}

export class DeleteNodesCommand implements Command {
    isVisual = false;

    private connections: NodeConnection[] = [];

    constructor(private nodes: Node[]) {
        this.connections = [];
        nodes.forEach(node => {
            node.properties.forEach(property => {
                property.connections.forEach(connection => {
                    if (this.connections.indexOf(connection) < 0) {
                        this.connections.push(connection);
                    }
                });
            });
        });
    }

    execute(editor: Editor) {
        editor.nodeGroup.nodes = editor.nodeGroup.nodes.filter(n => this.nodes.indexOf(n) < 0);
        this.connections.forEach(connection => connection.disconnect());
        editor.draw();
    }

    undo(editor: Editor) {
        editor.nodeGroup.nodes = editor.nodeGroup.nodes.concat(this.nodes);
        this.connections.forEach(connection => connection.connect());
        editor.draw();
    }

    redo(editor: Editor) {
        this.execute(editor);
    }

}

export class ChangePropertyValueCommand implements Command {
    isVisual = false;
    oldValue: any;

    constructor(private property: NodeProperty, private newValue: any) {
        this.oldValue = property.value;
    }

    execute(editor: Editor) {
        this.property.value = this.newValue;
        editor.draw();
    }

    undo(editor: Editor) {
        this.property.value = this.oldValue;
        editor.draw();
    }

    redo(editor: Editor) {
        this.execute(editor);
    }

}

export class ResizeNodeCommand implements Command {
    isVisual = true;
    oldWidth: number;

    constructor(private node: Node, private dimension: Dimension) {
        this.oldWidth = node.bounds.dimension.width;
    }

    execute(editor: Editor) {
        this.node.fullWidth = this.dimension.width;
        editor.draw();
    }

    undo(editor: Editor) {
        this.node.fullWidth = this.oldWidth;
        editor.draw();
    }

    redo(editor: Editor) {
        this.execute(editor);
    }

}