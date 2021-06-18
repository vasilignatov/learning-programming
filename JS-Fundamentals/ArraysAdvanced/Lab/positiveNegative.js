function positiveNargative(arr){
    let result = arr.slice();
    for(let i = 0; i < arr.length; i++){
        if (result[i] < 0){
            result.unshift(result[i]);
            result.splice(i+1, 1)
        }
    }
    return result.join('\n')
}
console.log(positiveNargative([7, -2, 8, 9]))