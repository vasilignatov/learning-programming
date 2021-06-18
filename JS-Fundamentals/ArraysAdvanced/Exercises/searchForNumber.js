function searchingForNunber(arr, condition){
    let firstNum = condition.shift();
    let secondNum = condition.shift();
    let thirdNum = condition.shift();
    let arr2 = arr.splice(0, firstNum);
    arr2.splice(0, secondNum);
    let counter = 0;
    for(let num of arr2){ if(num === thirdNum) counter++;}
    console.log(`Number ${thirdNum} occurs ${counter} times.`);
}
searchingForNunber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )
