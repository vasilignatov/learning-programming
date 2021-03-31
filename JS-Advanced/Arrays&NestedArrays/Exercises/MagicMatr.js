function solve(arr) {
    let rowSum = arr.map(element => element.reduce((a, b) => a + b));
    let columnSum = arr[0].map((_, col) => arr.map(row => row[col])).map(element => element.reduce((a, b) => a + b));
    return rowSum.concat(columnSum).every((el, index, arr) => el === arr[0]);
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);