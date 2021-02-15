function sumDigits(n) {

    let nToString = n.toString();
    let sum = 0;

    for(let i = 0; i < nToString.length; i++){
        sum += Number(nToString[i]);
    }
    console.log(sum);
}
sumDigits(245678)