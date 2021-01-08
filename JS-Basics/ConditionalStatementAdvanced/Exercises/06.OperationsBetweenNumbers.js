function operations(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = 0;
    let chetno = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    if ((operator === '+' || operator === '-' || operator === '*') && result % 2 === 0) {
        chetno = 'even'
        console.log(`${num1} ${operator} ${num2} = ${result} - ${chetno}`);
    } else if (result % 2 !== 0) {
        chetno = 'odd'
        console.log(`${num1} ${operator} ${num2} = ${result} - ${chetno}`);
    }
    if (operator === '/' && num2 != 0) {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${(result).toFixed(2)}`);
    } else if (operator === '/' && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
    if (operator === '%' && num2 !== 0) {
        result = num1 % num2;
        console.log(`${num1} % ${num2} = ${result}`);
    } else if (operator === '%' && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    }
}