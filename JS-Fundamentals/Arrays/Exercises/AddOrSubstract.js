function solve(arr){
    let oldSum = 0;
    let newSum = 0;
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        oldSum += current;

        if ( current % 2 == 0 ){
            current += i;
            arr[i] = current;
            newSum += current;
        } else {
            current -= i;
            arr[i] = current;
            newSum += current;
        }
    }
console.log(arr);
console.log(oldSum);
console.log(newSum);
}
solve([5, 15, 23, 56, 35])
