function bombNums(arr, bomb) {
    let bombNum = bomb.shift();
    let bombPower = bomb.shift();
    let bombsCounter = 0;
    for (const bombN of arr) {
        if (bombN == bombNum ){
            bombsCounter++;
        }
    }
    while (bombsCounter >= 0) {
        leftDetonate(arr);
        rigtDetonate(arr);
        bombsCounter--;
        if(bombsCounter == 0){
            sumOfArr(arr);
        }
    }
    function rigtDetonate(arr) {
        let righ = arr.indexOf(bombNum);
        let detonations = 0;
        for (let i = righ + 1; i >= 0; i++) {
            arr.splice(i, 1)
            detonations++;
            if (detonations == bombPower) {
                break;
            }
            
        }
    }

    function leftDetonate(arr) {
        let left = arr.indexOf(bombNum);
        let detonations = 0;
        for (let i = left - 1; i >= 0; i--) {
            detonations++;
            arr.splice(i, 1);
            if (detonations == bombPower) {
                break;
            }
        }
        arr.splice(arr.indexOf(bombNum), 1);
    }
    
    function sumOfArr(arr) {
        let result = 0;
        for (const num of arr) {
            result += num;
        }
        console.log(result);
    }
    }
// bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNums([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNums([1, 7, 7, 1, 2, 3],
    [7, 1]
    
    
    )
