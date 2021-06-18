function sumAndSubtract(x, y, z) {

    function sum(a, b){
        return a + b;
    }

    let result = sum(x, y);
    return result - z;
}
console.log(sumAndSubtract(23, 6, 10))

function sumAndSubtract2(x, y, z){
    let result = (a, b) => a + b;
    return result(x, y) - z;
}
console.log(sumAndSubtract2(1, 2, 3));