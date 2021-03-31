function solve(arr){
    let result = [];
    for( let i = 1; i < arr.length; i+=2){
        result.push(arr[i])
    }

    return result.map(x => x*2).reverse();
}