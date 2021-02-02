function specialNumbers(num) {


    let sumOfDigits = 0;
    let isTrue = false;
    for (let i = 1; i <= num; i++) {
        let numToString = i.toString();
        let currentDigitStr = '';
        let currentDigitNum = 0

        for (let j = 0; j < numToString.length; j++) {
            currentDigitStr = numToString[j];
            currentDigitNum = Number(currentDigitStr);
            sumOfDigits += currentDigitNum;
        }

        if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11) {
            isTrue = true;
        }

        if (isTrue) {
            console.log(`${i} -> True`);
            isTrue = false;
            sumOfDigits = 0;
        } else {
            console.log(`${i} -> False`);
            sumOfDigits = 0;
        }
    }
}
specialNumbers(15)