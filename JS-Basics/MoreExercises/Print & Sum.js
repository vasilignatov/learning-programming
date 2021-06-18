function printAndSum(num1, num2){
    let printLine = '';
    let sum = 0;
    while(num1 <= num2){
        printLine += num1 + ' ';
        sum += num1;
        num1++;
    }
    console.log(`${printLine}\nSum: ${sum}`);
} 
printAndSum(5, 10)