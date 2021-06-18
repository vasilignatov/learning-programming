function solve(input) {
    let sequence = input.split(' ').map(x => Number(x));
    let average = sequence.reduce((p, c) => p + c, 0) / sequence.length;
console.log(sequence
    .filter(x => x > average)
    .sort((a, b) => b - a)
    .slice(0, 5)
    .join(' ') || 'No')
    

}
solve('10 20 30 40 50')