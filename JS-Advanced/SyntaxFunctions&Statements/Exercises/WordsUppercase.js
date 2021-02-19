function solve(str) {
    const pattern = /\w+/gm;
    let match = str.match(pattern);
    let toUpper = match.map(x => x.toUpperCase());
    
    return toUpper.join(', ')
}
console.log(solve('Hi, how are you?'));