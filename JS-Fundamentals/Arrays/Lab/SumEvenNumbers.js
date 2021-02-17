function swap(input){
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        let stringToNum = Number(input[i]);
        if (stringToNum % 2 == 0){
            sum += stringToNum;
        }
    }
    console.log(sum);
}
swap(['1','2','3','4','5','6']);