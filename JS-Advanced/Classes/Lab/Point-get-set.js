class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y; 
    }

    get x() {
        return this._x;
    }
    set x(value) {
        if (typeof value != 'number') {
            throw new TypeError('x-value is not a Number')
        }
        this._x = value;
    }

    get y() {
        return this._y;
    }
    set y(value) {
        if (typeof value != 'number') {
            throw new TypeError('y-value is not a Number')
        }
        this._y = value;
    }

    static distance(p1, p2) {
        if (p1 instanceof Point == false || p2 instanceof Point == false) {
            throw new TypeError('Parameter must be of type Point')
        }

        return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
    }
}

const point1 = new Point(0, 0);
console.log(point1.x);
point1.x = 3;
point1.y = 4;
console.log(point1.x);
Ll

const point2 = new Point(4, 5);
console.log((Point.distance(point1, point2)));