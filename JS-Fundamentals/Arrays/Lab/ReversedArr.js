function reversedArray(num, arr){
    arr.length = num;
    arr = arr.reverse();
    console.log(arr.join(' '));
}
reversedArray(3, [10, 20, 30, 40, 50])