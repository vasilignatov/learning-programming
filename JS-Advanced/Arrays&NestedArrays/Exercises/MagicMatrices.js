function solve(arr) {
    let rowSum = arr.map(element => element.reduce((a, b) => a + b));

    let columnSum = [];

    for (let i = 0; i < arr.length; i++) {
        let currColumn = [];
        for (let j = 0; j < arr.length; j++) {
            let index = arr.length - 1 - j;
            currColumn.push(arr[index][i])
        }
        let sum = currColumn.reduce((a, b) => a + b);
        columnSum.push(sum);
    }
    return rowSum.concat(columnSum).every((el, index, arr) => el === arr[0]);
}
console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));