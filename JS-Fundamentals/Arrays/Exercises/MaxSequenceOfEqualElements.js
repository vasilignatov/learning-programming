function maxSequence(arr) {
    let currentSequence = 0;
    let sequence = 0;
    let currentNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        for (let j = i; j <= arr.length; j++) {

            if (sequence < currentSequence) {
                sequence = currentSequence;
                currentNum = arr[i];
            }

            if (element == arr[j]) {
                currentSequence++;

            } else {
                currentSequence = 0;
                break;
            }
        }
        currentSequence = 0;
    }
    let printLine = [];
    for (let i = 1; i <= sequence; i++) {
        printLine.push(currentNum)
    }
    console.log(printLine.join(' '));
    //pechatame     

}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
maxSequence([4, 4, 4, 4])
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])