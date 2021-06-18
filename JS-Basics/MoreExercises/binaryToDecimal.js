function binaryToDecimal(num) {
    let magnitude = 0;
    let decimal = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        let digit = Number(num[i])
        decimal += digit * (Math.pow(2, magnitude));
        magnitude++;
    }
    console.log(decimal);
}
binaryToDecimal('0011 0010')


function decimalToBinary(num){
    let binary = [];                                                 
    while(num !== 0){
        binary.unshift(remainder);
        num = Math.floor(num / 2);
    }
    console.log(binary.join(''));
}
decimalToBinary(10);