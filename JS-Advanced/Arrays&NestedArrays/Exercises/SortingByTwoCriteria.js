function solve(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}

function solve2(arr) {
    return arr.sort((a, b) => {
        if(a.length == b.length){
            return a.localeCompare(b)
        }
        return a.length - b.length
    }).join('\n')
}
console.log(solve2(['alpha',
    'beta',
    'gamma']
));
console.log(solve2(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));
console.log(solve2(['test',
    'Deny',
    'omen',
    'Default']
));