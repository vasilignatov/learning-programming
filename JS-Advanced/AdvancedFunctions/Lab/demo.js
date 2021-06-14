function A() {
    let myVarА = 5;
    console.log('inside A', myVarА);
    
    return B();

    function B() {
        let myVarB = 4;
        console.log('inside B', myVarB);
        console.log(myVarA + myVarB);
    }


}
 

function createRect(a, b) {

    return {
        getA,
        getB,
        getArea,
        setA
    }

    function getA() {
        return a;
    }
    function getB() {
        return b;
    }
    function getArea() {
        return a * b;
    }

    function setA(value) {
        a = value;
    }
}

// const rect = createRect(10, 3);
// console.log(rect.getA());
// console.log(rect.getB());
// console.log(rect.getArea());

// rect.setA(5, 2);
// console.log(rect.getA());
// console.log(rect.getB());
// console.log(rect.getArea());

function createCounter() {  // CLOSURE Example
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}

const myCounter = createCounter();
const myCounter2 = createCounter();

// myCounter()
// myCounter()
// myCounter()
// myCounter2()
// myCounter2()
// myCounter2()        


const num = 3;
nums = {num}

function solve(...num) {
    console.log(num);
    console.log(Array.isArray(num));
}
solve(num);
