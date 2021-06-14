function add(n) {
    let sum = 0
    sum += n

    function calc(m) {
        sum += m
        return calc;
    }

    calc.toString = () => sum;

    return calc;
}

// console.log(add(1)(2)(1).toString());
// console.log(add(1)(2)(1)(4)(5).toString());


