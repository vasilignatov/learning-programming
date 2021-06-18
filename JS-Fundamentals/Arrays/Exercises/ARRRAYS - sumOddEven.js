function substractionEvenOdd(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i of arr) {
        if (i % 2 == 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }
    console.log(evenSum - oddSum);
}

substractionEvenOdd([1, 2, 3, 4, 5, 6])