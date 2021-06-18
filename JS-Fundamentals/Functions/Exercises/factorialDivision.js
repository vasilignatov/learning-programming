function factorial(a, b){
    let aFac = 1;
    let bFac = 1;
    for(let i = 1; i <= a; i++){
        aFac *= i;
    }
    for(let i = 1; i <= b; i++){
        bFac *= i;
    }
    return (aFac / bFac).toFixed(2)
}
factorial(5, 2)