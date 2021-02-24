function printNthElement(arr){
    let printLine = [];
    let step = Number(arr[arr.length - 1]);
    for(let i = 0; i < arr.length - 1; i += step){
        printLine.push(arr[i]);
    }
    console.log(printLine.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2'])