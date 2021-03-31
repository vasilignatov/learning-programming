function solve(arr) {
    return arr
        .sort((a, b) => a.localeCompare(b))
        .map((x, index) => x = `${index + 1}.${x}`)
        .join('\n');
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));


const solve2 = (arr) => arr.sort((a,b)=>a.localeCompare(b)).map((x, index) => x = `${index + 1}.${x}`).join('\n');