function solve(arr) {
    let result = [];
    let curr = Number.MIN_SAFE_INTEGER;
    for (let num of arr) {
        if (num >= curr) {
            curr = num;
            result.push(curr);
        }
    }
    return result;
}

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
));