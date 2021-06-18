function solve(num, precision) {
    let result = 0;
    if (precision >= 15){
        result = num.toFixed(15);
    } else {
        result = num.toFixed(precision);
    }
console.log(parseFloat(result));
}
solve (1.5, 3)