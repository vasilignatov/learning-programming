function sortNumbers(num1, num2, num3) {
    let first = 0;
    let second = 0;
    let third = 0;

    if (num2 > num1 && num2 > num3){
        first = num2;
        if (num3 > num1){
            second = num3;
            third = num1;
        }else {
            second = num1;
            third = num3;
        }
        console.log(`${first}\n${second}\n${third}`);
    }
    if (num3 > num2 && num3 > num1){
        first = num3;
        if (num2 > num1){
            second = num2;
            third = num1;
        }else {
            second = num1;
            third = num2;
        }
        console.log(`${first}\n${second}\n${third}`);
    }
    if (num1 > num2 && num1 > num3){
        first = num1;
        if (num2 > num3){
            second = num2;
            third = num3;
        }else {
            second = num3;
            third = num2;
        }
        console.log(`${first}\n${second}\n${third}`);
    }
}
sortNumbers(3, 0, 0);