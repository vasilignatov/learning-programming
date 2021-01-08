function specialNum(input) {
    let n = Number(input[0]);
    let printLine = '';
    for (let i = 1111; i <= 9999; i++) {
        let currentNum = ''+i;
        let current = 0
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j))    

            if (n % currentDigit === 0){
                current++
            }
        }
        if (current === 4){
            printLine += `${currentNum} `;
        }
    }
    console.log(printLine);
}
specialNum(["16"]);