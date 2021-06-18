function numModif(num){
    numToStr = num.toString();
    function isBiggerThan5(num){
        let average = 0;
        while(average <= 5){
            let sum = 0;
            for(let i = 0; i <numToStr.length; i++){
                sum += Number(numToStr[i]);
            }
            average = sum / numToStr.length;
            if(average >= 5){
                break;
            } else {
                numToStr += 9;
            }
        }
    }
    isBiggerThan5();
    return numToStr;
}
console.log(numModif(101));
console.log(numModif(5835));