function smalestTwoNums(arr) {

    let newArr = arr.slice();
    newArr.sort((a, b) => a - b)
    let result = newArr.slice(0, 2);
    result = result.join(' ');
    return result;
}
console.log(smalestTwoNums([30, 15, 50, 5]));