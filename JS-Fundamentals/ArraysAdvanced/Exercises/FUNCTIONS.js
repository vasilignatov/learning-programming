function myJoin(arr, separator) {                  // функцията array.join()
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result = i !== arr.length - 1 ? result += arr[i] + separator : result += arr[i];
    }
    return result;
}

function myReverse(arr) {                         // функцията array.reverse()

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

function myPush(arr, element) {                    // функцията array.push()
    arr[arr.length] = element;
}

function myPop(arr) {                              // функцията array.pop()
    arr[arr.length] = element;
    let element = arr[arr.length - 1];
    arr.length--;

    return element;
}

function myIndexOf(arr, value) {                  // функцията array.indexOf()
    arr[arr.length] = element;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return value = i;
        }
    }
    return -1;
}

function myIncludes(arr, value) {                // функцията array.includes()
    arr[arr.length] = element;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

function myShift(arr) {
    let tempArr = [];
    let element = arr[0]
    for (let i = 1; i < arr.length; i++) {
        tempArr[tempArr.length] = arr[i];
    }
    arr = tempArr;
    return element;
}

function myUnshift(arr, element) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
}

function myMap(arr, fn){
    let result = [];

    for (let element of arr) {
        let  mapped = fn(element);
        result.push(mapped);
    }
    
    return result;
}

console.log(myMap(['1', '2', '3', '4', '5'], Number))

function compareNums(a, b) {
    // if (a > b){
    //     return -1;
    // } else if (a < b){
    //     return 1;
    // } else {
    //     return 0;
    // }

    return a - b
}