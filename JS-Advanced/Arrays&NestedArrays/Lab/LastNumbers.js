function solve(n, k) {
    let result = [1];
    while (result.length != n) {
        result.push(addNextNum(n, k, result));
    }
    function addNextNum(n, k, result){
        if(result.length <= k){
            let current = result.reduce((a, b) => a + b);
            return current;
            
        } else {
            let arr = result.slice(-k);
            let current = arr.reduce((a,b) => a + b)
            return current;
        }
    }

    return result;

}
console.log(solve(8, 2));

// 8, 2  [1, 1, 2, 3, 5, 8, 13, 21]