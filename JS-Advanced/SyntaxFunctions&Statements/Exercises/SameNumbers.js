function solve(num) {
    const numToStr = num.toString();
    const strToArr = numToStr.split('');
    let isTrue = true;
    let result;
    for (let i = 0; i < strToArr.length - 1; i++) {
        if (strToArr[i] !== strToArr[i + 1]) {
            isTrue = false;
            break;
        }
    }
    const sum = strToArr.map(Number).reduce((a, b) => a + b, 0);
    return isTrue + '\n' + sum
}
console.log(solve(2222222));
console.log(solve(1234));