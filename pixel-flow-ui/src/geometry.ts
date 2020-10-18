
export class Point {
    
    constructor(public x: number, public y: number) { }

    offset(dx: number, dy: number) {
        return new Point(this.x + dx, this.y + dy);
    }

    rect(width: number, height: number): Rectangle {
        return new Rectangle(this.x, this.y, width, height);
    }

    rectOf(dimension: Dimension): Rectangle {
        return new Rectangle(this.x, this.y, dimension.width, dimension.height);
    }

    rectCentered(width: number, height: number) {
        return new Rectangle(this.x - width/2, this.y - height / 2, width, height);
    }

    rectTo(other: Point) {
        const mx = Math.min(this.x, other.x);
        const my = Math.min(this.y, other.y);
        const width = Math.abs(this.x - other.x);
        const height = Math.abs(this.y - other.y);
        return new Rectangle(mx, my, width, height);
    }

    add(other: Point) {
        return new Point(this.x + other.x, this.y + other.y);
    }

    sub(other: Point): any {
        return new Point(this.x - other.x, this.y - other.y);
    }

    distance(position: Point) {
        return Math.sqrt((this.x - position.x) * (this.x - position.x) + (this.y - position.y) * (this.y - position.y));
    }

    scale(amount: number): Point {
        return new Point(this.x * amount, this.y * amount);
    }
}

export class Dimension {
    
    constructor(public width: number, public height: number) {}

    scale(amount: number) {
        return new Dimension(this.width * amount, this.height * amount);
    }
}

export class Rectangle {
    
    origin: Point;
    dimension: Dimension;

    constructor(x: number, y: number, width: number, height: number) {
        this.origin = new Point(x, y);
        this.dimension = new Dimension(width, height);
    }

    corner() {
        return this.origin.offset(this.dimension.width, this.dimension.height);
    }

    topRight(): Point {
        return this.origin.offset(this.dimension.width, 0);
    }

    bottomLeft(): Point {
        return this.origin.offset(0, this.dimension.height);
    }

    middleRight() {
        return this.origin.offset(this.dimension.width, this.dimension.height / 2);
    }

    middleLeft() {
        return this.origin.offset(0, this.dimension.height / 2);
    }

    expand(dx: number, dy: number): Rectangle {
        return new Rectangle(this.origin.x - dx, this.origin.y - dy,
            this.dimension.width + dx * 2, this.dimension.height + dy * 2);
    }

    shrink(dx: number, dy: number): Rectangle {
        return new Rectangle(this.origin.x + dx, this.origin.y + dy,
            this.dimension.width - dx * 2, this.dimension.height - dy * 2);
    }

    withSize(newDimension: Dimension): Rectangle {
        return new Rectangle(this.origin.x, this.origin.y,
            newDimension.width, newDimension.height);
    }

    withWidth(newWidth: number): Rectangle {
        return new Rectangle(this.origin.x, this.origin.y,
            newWidth, this.dimension.height);
    }

    withHeight(newHeight: number): Rectangle {
        return new Rectangle(this.origin.x, this.origin.y,
            this.dimension.width, newHeight);
    }

    moveOrigin(dx: number, dy: number): Rectangle {
        return new Rectangle(this.origin.x + dx, this.origin.y + dy,
            this.dimension.width - dx, this.dimension.height - dy);
    }

    move(amount: Point): Rectangle {
        return new Rectangle(this.origin.x + amount.x, this.origin.y + amount.y,
            this.dimension.width, this.dimension.height);
    }

    moveTo(location: Point): Rectangle {
        return new Rectangle(location.x, location.y,
            this.dimension.width, this.dimension.height);
    }

    contains(position: Point): boolean {
        return position.x >= this.origin.x && position.y >= this.origin.y
            && position.x <= this.corner().x && position.y <= this.corner().y;
    }

    containsRect(other: Rectangle): boolean {
        return this.contains(other.origin) && this.contains(other.corner());
    }
} 
