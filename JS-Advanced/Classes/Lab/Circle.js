class Circle {
    constructor(r) {
        this.r = r
    }

    get diameter() {
        return this.r * 2;
    }

    set diameter(value) {

        if (typeof value != 'number') {
            throw new TypeError('The value must be of type Number!')
        }
        this.r = value / 2;
    }


}

const c = new Circle(5);
console.log(c.r);
console.log(c.diameter);

c.r = 10
console.log(c.r);
console.log(c.diameter);

