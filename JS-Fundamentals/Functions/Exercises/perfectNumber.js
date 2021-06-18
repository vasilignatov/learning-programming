// function perfectNum(num) {

//     temp = 0;

//     for (let i = 0; i < num / 2; i++) {
//         if (num % i === 0) {
//             temp += i;
//         }
//     }

//     if (temp == number && temp !== 0) {
//         return 'We have a perfect number!'
//     } else {
//         return 'It`s not so perfect.'
//     }
// }
// console.log(perfectNum(28));


function is_perfect(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        return "We have a perfect number!";
    }
    else {
        return "It`s not so perfect.";
    }
}
console.log(is_perfect(28))
