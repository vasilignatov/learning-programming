function solve(arr){
    let result = [];
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] >= current){
            current = arr[i];
            result.push(arr[i])
        }
    }
    return result.join(' ')
}

function solve(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
    result = arr.filter(filtering(arr))
    return result;
    }
}


console.log(solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([ 1, 2, 3, 4]));
console.log(solve([ 20, 3, 2, 15, 6, 1]));