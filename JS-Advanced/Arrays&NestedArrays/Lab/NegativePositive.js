function solve(arr){
    let result = arr.filter(x => x >= 0);
    let filtered = arr.filter(x => x < 0);
    filtered.forEach(num => result.unshift(num));
    return result.join('\n')
}
console.log(solve([7, -2, 8, 9]));