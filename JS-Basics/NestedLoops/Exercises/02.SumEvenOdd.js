function solve(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let printLine = '';

    for (let i = num1; i <= num2; i++) {
        let currentNum = '' + i;
        let sumOdd = 0;
        let sumEven = 0;

        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            printLine += `${i} `;
        }

    }
    console.log(printLine);


}
solve(['299900', '300000'])
