function calculator() {

    let firstElement;
    let secondElement;
    let resultElement;

    return {
        init(firstSelector, secondSelector, result) {
            console.log(firstElement);
            firstElement = document.querySelector(firstSelector);
            secondElement = document.querySelector(secondSelector);
            resultElement = document.querySelector(result);
        },
        add() {
            resultElement.value = Number(firstElement.value) + Number(secondElement.value)
        },
        subtract() {
            resultElement.value = Number(firstElement.value) - Number(secondElement.value)
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');

// let add = calculate.add;
// let subtract = calculate.subtract;


