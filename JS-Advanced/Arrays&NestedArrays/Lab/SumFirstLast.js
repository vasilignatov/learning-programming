function sum(arr){
    let maped = arr.map(Number);
    return maped[0] + maped[maped.length - 1];
}
console.log(sum(['20', '30', '40']));