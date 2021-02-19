function solve(a, b){
    let divident = a >= b ? a : b;
    let divisor = a <= b ? a : b;
    
    while(divisor != 0){
        let remainder = divident % divisor;
        divident = divisor;
        divisor = remainder;
    }
    console.log(divident);
}
solve(2154, 458)