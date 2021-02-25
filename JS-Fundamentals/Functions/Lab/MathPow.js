function pow(a, x){
    let result = 1;
    for(let i = 1; i <= x; i++){
        result *= a;
    }
    console.log(result);
}
pow(2, 8)

function pow2 (a, x){
    console.log(Math.pow(a, x))
}
pow2(2, 8)