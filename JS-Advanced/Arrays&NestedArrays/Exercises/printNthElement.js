const solve = (arr, n) => arr.filter((el, i) => i % n === 0);

console.log(solve([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2
));

