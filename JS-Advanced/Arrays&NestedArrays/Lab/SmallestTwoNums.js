function solve(arr) {
    let sorted = arr.sort((a, b) => a - b);
    return sorted.slice(0, 2).join(' ')
}
console.log(solve([30, 15, 50, 5]))