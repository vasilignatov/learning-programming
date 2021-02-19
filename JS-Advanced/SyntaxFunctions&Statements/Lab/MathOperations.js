function mathOperations(num1, num2, operator) {
    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }
    console.log(operators[operator](num1, num2));
}
mathOperations(5, 6, '3');
mathOperations(3, 5.5, '*')