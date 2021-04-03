//solve with factory function
function rectangle(width, height, color) {

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1,);
    }

    return {
        width,
        height,
        color: capitalize(color),
        calcArea() {
            return this.height * this.width;
        }
    }
}

// solve with decorator functon
function rectangle2(width, height, color) {

    let rect = {
        width: Number(width),
        height: Number(height),
        color: capitalize(color)
    }

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1,);
    }

    function createCalcArea(rect) {
        rect.calcArea = () => rect.width * rect.height;
        return rect;
    }

    createCalcArea(rect);
    return rect;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

console.log('--------------------');

let rect2 = rectangle2(4, 5, 'red');
console.log(rect2.width);
console.log(rect2.height);
console.log(rect2.color);
console.log(rect2.calcArea());
