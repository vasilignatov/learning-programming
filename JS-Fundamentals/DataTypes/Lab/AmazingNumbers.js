function amazingNumbers(num) {

    //convert to string
    let numAsString = num.toString();
    let sum = 0;

    //convert each character to a number
    for (let i = 0; i < numAsString.length; i++) {
        //sum numbers
        sum += Number(numAsString[i]);
    }

    //convert to string
    let sumAsString = sum.toString();


    //check if includes 9
    if (sumAsString.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233)
