function triangleOfNums(n) {
    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';


    for (let row = 1; row <= n; row++) {
        for (let num = 1; num <= row; num++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + ' ';
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';

        if(isBigger){
            break;
        }
    }
}
triangleOfNums(6)
