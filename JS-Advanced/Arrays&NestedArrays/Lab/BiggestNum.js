function solve(input) {
    
    let biggest = Number.MIN_SAFE_INTEGER;

    input.forEach(num => {
        if(Math.max(...num) > biggest) { 
            biggest = Math.max(...num)
        }
    });
    return biggest
}
console.log(solve([[1,5,10,4],
                   [10,5,12,4],
                   [16,5,100,4]]));