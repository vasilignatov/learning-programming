function sum(input) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < input.length; i++) {
        leftSum += input[i][i];
        rightSum += input[i][input.length - 1 - i];
    }
    return (`${leftSum} ${rightSum}`)
}
console.log(sum([[20, 40],
[10, 60]]
));
console.log(sum([[3, 5, 17],
                   [-1, 7, 14],
                   [1, -8, 89]]
   ));