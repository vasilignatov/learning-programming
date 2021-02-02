function solve(num1, num2, num3){
    let sum = num1 + num2 + num3;
    sum += '';
    let type = '';
    for (let i = 0; i < sum.length; i++){
        if (sum[i] === '.'){
            type = 'Float';
            break;
        } else{
            type = 'Integer';
        }
    }
    console.log(`${sum} - ${type}`);
}
solve(9, 100, 1.1)