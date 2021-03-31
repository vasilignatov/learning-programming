function solve(input) {
    let counter = 0;
    for (let i = 0; i < input.length - 1; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == input[i + 1][j]) {
                counter++;
            }
            if (input[i][j] == input[i][j + 1]) {
                counter++;
            }
        }
    }
    let arr = input.pop();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) { counter++; }
    }
    return counter;
}
console.log(solve([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
));