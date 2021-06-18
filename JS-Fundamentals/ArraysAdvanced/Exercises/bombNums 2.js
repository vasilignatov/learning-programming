function bombNums(arr, bomb) {
    let bombNum = bomb.shift();
    let bombPower = bomb.shift();
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == bombNum){
            let counter = bombPower;
            for(let j = arr[i - 1]; j >= 0; j-- ){
                if (j !== 0){
                    arr.splice(j,1);
                    i--;
                    counter--;
                    if (counter == 0) break;
                }else{
                    break;
                }
            }      
            arr.splice(i, bombPower + 1)
            i = 0;
        }
    }
    let sum = arr.reduce((a, b) => a + b)
    console.log(sum);
}
//        0  1  2  3  4  5  6  7
bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]); //12
bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]); // 5 
bombNums([1, 7, 7, 1, 2, 3], [7, 1]); // 6 
bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); // 4


