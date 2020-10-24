
import { Point, Rectangle, Dimension } from './geometry';
import { Editor, Event, Node, NodeProperty } from './editor'
import { State } from './states';

export interface StyleDimension {
    unit: number;
    headerHeight: number;
    roundRadius: number;
    collapseArrowSize: number;
    connectorRadius: number;
    snapSize: number;
}

export interface Color {
    r: number;
    g: number;
    b: number;
}

export interface PropertyHandler {
    layout(renderer: Renderer, prop: NodeProperty);
    draw(renderer: Renderer, prop: NodeProperty);
    handlerMouseDown(editor: Editor, event: Event, property: NodeProperty): State;
}

export interface GraphicalHelper {
    getHeaderColor(node: Node): Color;
    getConnectorColor(valueDef: NodeProperty): Color;
    getPropertyHandler(property: NodeProperty): PropertyHandler;
}

export interface ColorTheme {
    BACKGROUND_COLOR  : Color;
    NODE_BACK_COLOR   : Color;
    NODE_COLOR_ALPHA  : number;
    TEXT_COLOR        : Color;
    BORDER_COLOR      : Color;
    PROPERTY_COLOR    : Color;
    HIGHLIGHT_COLOR   : Color;
    SELECT_BACK_COLOR : Color;
    CHECK_BACK_COLOR  : Color;
    SELECTION_COLOR   : Color;
}

export const darkTheme: ColorTheme = {
    BACKGROUND_COLOR  : { r: 0x1d, g: 0x1d, b: 0x1d },
    NODE_BACK_COLOR   : { r: 0x55, g: 0x55, b: 0x55 },
    NODE_COLOR_ALPHA  : 0.7,
    TEXT_COLOR        : { r: 0xFF, g: 0xFF, b: 0xFF },
    BORDER_COLOR      : { r: 0x00, g: 0x00, b: 0x00 },
    PROPERTY_COLOR    : { r: 0x56, g: 0x56, b: 0x56 },
    HIGHLIGHT_COLOR   : { r: 0x37, g: 0x81, b: 0xbf },
    SELECT_BACK_COLOR : { r: 0x27, g: 0x27, b: 0x27 },
    CHECK_BACK_COLOR  : { r: 0x66, g: 0x66, b: 0x66 },
    SELECTION_COLOR   : { r: 0xc4, g: 0x8b, b: 0x43 },
}

export const lightTheme: ColorTheme = {
    BACKGROUND_COLOR  : { r: 0xFF, g: 0xFF, b: 0xFF },
    NODE_BACK_COLOR   : { r: 0x85, g: 0x85, b: 0x85 },
    NODE_COLOR_ALPHA  : 0.9,
    TEXT_COLOR        : { r: 0xFF, g: 0xFF, b: 0xFF },
    BORDER_COLOR      : { r: 0x00, g: 0x00, b: 0x00 },
    PROPERTY_COLOR    : { r: 0x56, g: 0x56, b: 0x56 },
    HIGHLIGHT_COLOR   : { r: 0x37, g: 0x81, b: 0xbf },
    SELECT_BACK_COLOR : { r: 0x27, g: 0x27, b: 0x27 },
    CHECK_BACK_COLOR  : { r: 0x66, g: 0x66, b: 0x66 },
    SELECTION_COLOR   : { r: 0xc4, g: 0x8b, b: 0x43 },
}

export function rgb(color: Color, alpha = 1) {
    return `rgb(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function offsetColor(color: Color, offset: number): Color {
    function clamp(color: number) {
        return Math.max(Math.min(color, 255), 0);
    }
    return {
        r: clamp(color.r + offset),
        g: clamp(color.g + offset),
        b: clamp(color.b + offset)
    };
}

export enum Corner {
    TopLeft  = 1,
    TopRight = 2,
    BottomLeft = 4,
    BottomRight = 8
}
export const AllCorner = Corner.TopLeft | Corner.TopRight | Corner.BottomLeft | Corner.BottomRight;

export enum Direction {
    DOWN, LEFT, RIGHT
}

export enum Align {
    LEFT, RIGHT
}

export class ZoomState {
    constructor(public origin: Point, public scale: number) {}
}

export class RoundBox {
   
    private fillColor: string;
    private strokeColor: string;
    private roundCorners: number;
    private hasShadow = false;
    private isFilled = false;
    private isStroked = false;
    private lineWidth: number = 1;
    private clippedBox: Rectangle = null;

    constructor(private renderer: Renderer, private radius: number) {
        this.fillColor = rgb(renderer.theme.PROPERTY_COLOR);
        this.strokeColor = rgb(renderer.theme.BORDER_COLOR);
        this.roundCorners = AllCorner;
    }

    filled(color: string) {
        this.fillColor = color;
        this.isFilled = true;
        return this;
    }

    line(width: number) {
        this.lineWidth = width;
        return this;
    }

    stroke(color: string) {
        this.strokeColor = color;
        this.isStroked = true;
        return this;
    }

    corners(corners: number) {
        this.roundCorners = corners;
        return this;
    }

    shadow() {
        this.hasShadow = true;
        return this;
    }

    clipped(clipBox: Rectangle) {
        this.clippedBox = clipBox;
        return this;
    }

    draw(bounds: Rectangle) {
        this.renderer.context.save();
        if (this.isFilled) {
            this.renderer.context.fillStyle = this.fillColor;
        }
        if (this.isStroked) {
            this.renderer.context.lineWidth = this.lineWidth;
            this.renderer.context.strokeStyle = this.strokeColor;
        }
        this.renderer.context.beginPath();
        this.renderer.context.moveTo(bounds.origin.x + bounds.dimension.width / 2, bounds.origin.y);
        if (this.roundCorners & Corner.TopRight) {
            this.renderer.context.lineTo(bounds.corner().x - this.radius, bounds.origin.y);
            this.renderer.context.arcTo(bounds.corner().x, bounds.origin.y, bounds.corner().x, bounds.origin.y + this.radius, this.radius);
        } else {
            this.renderer.context.lineTo(bounds.corner().x, bounds.origin.y);
        }
        if (this.roundCorners & Corner.BottomRight) {
            this.renderer.context.lineTo(bounds.corner().x, bounds.corner().y - this.radius);
            this.renderer.context.arcTo(bounds.corner().x, bounds.corner().y, bounds.corner().x - this.radius, bounds.corner().y, this.radius);
        } else {
            this.renderer.context.lineTo(bounds.corner().x, bounds.corner().y);
        }
        if (this.roundCorners & Corner.BottomLeft) {
            this.renderer.context.lineTo(bounds.origin.x + this.radius, bounds.corner().y);
            this.renderer.context.arcTo(bounds.origin.x, bounds.corner().y, bounds.origin.x, bounds.corner().y - this.radius, this.radius);
        } else {
            this.renderer.context.lineTo(bounds.origin.x, bounds.corner().y);
        }
        if (this.roundCorners & Corner.TopLeft) {
            this.renderer.context.lineTo(bounds.origin.x, bounds.origin.y + this.radius);
            this.renderer.context.arcTo(bounds.origin.x, bounds.origin.y, bounds.origin.x + this.radius, bounds.origin.y, this.radius);
        } else {
            this.renderer.context.lineTo(bounds.origin.x, bounds.origin.y);
        }

        if (this.clippedBox) {
            this.renderer.context.clip();
            this.renderer.context.beginPath();
            this.renderer.context.rect(this.clippedBox.origin.x, this.clippedBox.origin.y,
                this.clippedBox.dimension.width, this.clippedBox.dimension.height);
        }
        this.renderer.context.closePath();
        
        if (this.hasShadow) {
            this.renderer.context.shadowColor = "black";
            this.renderer.context.shadowBlur = 10;
            this.renderer.context.shadowOffsetX = 0;
            this.renderer.context.shadowOffsetY = 4;
        }
        if (this.isFilled) {
            this.renderer.context.fill();
        }
        if (this.isStroked) {
            this.renderer.context.stroke();
        }
        this.renderer.context.restore();
    }
}

export class Renderer {
    
    
    public style: StyleDimension;
    
    constructor(public context: CanvasRenderingContext2D,
                public size: Dimension,
                public theme: ColorTheme,
                public graphicalHelper: GraphicalHelper) {
        this.computeStyle();
    }

    public setSize(size: Dimension) {
        this.size = size;
        this.computeStyle();
    }

    private computeStyle() {
        // TODO put font in theme
        this.context.font = "16px Roboto";
        const m = this.context.measureText("Hp");
        const unit = (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) / 2;
        this.style = {
            unit,
            headerHeight: unit * 5,
            roundRadius: unit,
            connectorRadius: unit,
            collapseArrowSize: unit * 2,
            snapSize: unit * 3,
        };
    }

    setProjection(state: ZoomState) {
        this.context.scale(state.scale, state.scale);
        this.context.translate(-state.origin.x, -state.origin.y);
    }

    getPosition(zoomState: ZoomState, position: Point): Point {
        return new Point(zoomState.origin.x + position.x / zoomState.scale, zoomState.origin.y + position.y / zoomState.scale);
    }

    clearScreen(color: Color) {
        this.context.fillStyle = rgb(color);
        this.context.fillRect(0, 0, this.size.width, this.size.height);
    }

    drawGrid(zoomState: ZoomState, color: Color, stepSize: number, stepCount: number, levelCount: number) {
        const rect = this.getPosition(zoomState, new Point(0, 0))
            .rectTo(this.getPosition(zoomState, new Point(this.size.width, this.size.height)));
        let offset = 10 * levelCount;
        let levelStep = stepSize;

        this.context.lineWidth = 1;

        for (let level = 0; level < levelCount; ++level) {
            this.context.strokeStyle = rgb(offsetColor(color, offset));
            this.context.beginPath();

            let i = Math.round(rect.origin.x / levelStep);
            for (let start = i * levelStep; start < rect.corner().x; start += levelStep, ++i) {
                if (i == 0 || (level < levelCount - 1 && i % stepCount == 0)) {
                    continue;
                }
                this.context.moveTo(start, rect.origin.y);
                this.context.lineTo(start, rect.corner().y);
            }

            i = Math.round(rect.origin.y / levelStep);
            for (let start = i * levelStep; start < rect.corner().y; start += levelStep, ++i) {
                if (i == 0 || (level < levelCount - 1 && i % stepCount == 0)) {
                    continue;
                }
                this.context.moveTo(rect.origin.x, start);
                this.context.lineTo(rect.corner().x, start);
            }

            this.context.stroke();

            levelStep *= stepCount;
            offset -= 10;
        }
    }

    drawConnection(fromPos: Point, toPos: Point, color: Color) {
        const gap = (toPos.x - fromPos.x) / 3;
        this.context.beginPath();
        this.context.moveTo(fromPos.x, fromPos.y);
        this.context.bezierCurveTo(fromPos.x + gap, fromPos.y, toPos.x - gap, toPos.y, toPos.x, toPos.y);
        this.context.lineWidth = 6;
        this.context.strokeStyle = rgb(offsetColor(this.theme.BORDER_COLOR, -20));
        this.context.stroke();
        this.context.lineWidth = 4;
        this.context.strokeStyle = rgb(color);
        this.context.stroke();
    }

    drawArrow(origin: Point, size: number, direction: Direction, color: string) {
        this.context.save();
        this.context.translate(origin.x, origin.y);
        if (direction == Direction.RIGHT) {
            this.context.rotate(-Math.PI / 2);
        } else if (direction == Direction.LEFT) {
            this.context.rotate(Math.PI / 2);
        }
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.moveTo(-size / 2, -size / 2);
        this.context.lineTo(size / 2, -size / 2);
        this.context.lineTo(0, size / 2);
        this.context.closePath();
        this.context.fill();
        this.context.restore();
    }

    roundBox(radius = this.style.roundRadius) {
        return new RoundBox(this, radius);
    }

    drawText(position: Point, color: string, text: string, align = Align.LEFT) {
        this.context.fillStyle = color;
        if (align == Align.RIGHT) {
            const tw = this.context.measureText(text).width;
            position = position.offset(-tw, 0);
        }
        this.context.fillText(text, position.x, position.y); 
    }

    private drawCheckMark(position: Point, color: string) {
        this.context.lineWidth = 3;
        this.context.strokeStyle = color;
        this.context.beginPath();
        this.context.moveTo(position.x + this.style.unit * 0.5, position.y + this.style.unit * 1.5);
        this.context.lineTo(position.x + this.style.unit * 1.25, position.y + this.style.unit * 2.25);
        this.context.lineTo(position.x + this.style.unit * 2.5, position.y + this.style.unit * 0.5);
        this.context.stroke();
    }

    checkboxRect(position: Point) {
        return new Rectangle(position.x, position.y, this.style.unit * 3, this.style.unit * 3);
    }

    drawCheckBox(box: Rectangle, checked: boolean) {
        //const box = this.checkboxRect(position);
        this.roundBox()
            .filled(rgb(checked ? this.theme.HIGHLIGHT_COLOR : this.theme.CHECK_BACK_COLOR))
            .draw(box)
        if (checked) {
            this.drawCheckMark(box.origin, rgb(this.theme.TEXT_COLOR));
        }
    }

    drawConnector(position: Point, color: string) {
        this.context.fillStyle = color;
        this.context.lineWidth = 1;
        this.context.strokeStyle = rgb(this.theme.BORDER_COLOR);
        this.context.beginPath();
        this.context.arc(position.x, position.y, this.style.connectorRadius, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }

    drawSelection(bounds: Rectangle) {
        this.context.strokeStyle = rgb(this.theme.NODE_BACK_COLOR);
        this.context.lineWidth = 2;
        this.context.setLineDash([5, 5]);
        this.context.beginPath();
        this.context.rect(bounds.origin.x, bounds.origin.y, bounds.dimension.width, bounds.dimension.height);
        this.context.stroke();
        this.context.setLineDash([]);
    }
}