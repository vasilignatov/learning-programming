function maxNum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (current <= nextNum) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            result.push(current)
        }
    }
    console.log(result.join(' '));
}
maxNum([41, 41, 3, 19, 15, 17])