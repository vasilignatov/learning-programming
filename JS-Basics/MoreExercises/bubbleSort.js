// let bubbleSort = (arr) => {
//     let iterateCounter = 0;
//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//                 i = 0;
//             }
//             iterateCounter++;
//         }
//     }
//     console.log(iterateCounter);
//     console.log(arr/wsa);
// }
// bubbleSort([3, 8, 20, 1, 7, 2, 6, 10, 100 , 0, -8])


// let bubbleSort2 = (inputArr) => {
//     let len = inputArr.length;
//     let iterateCounter = 0;

//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[i + 1];
//                 inputArr[i + 1] = tmp;
//                 swapped = true;
//             }
//             iterateCounter++;
//         }
//     } while (swapped);
//     console.log(iterateCounter);
//     return inputArr
// };

// console.log(bubbleSort2([3, 8, 20, 1, 7, 2, 6, 10, 100 , 0, -8]))


// let bubbleSort3 = (arr) => {

// }


[1, 2, 3, 4].filter(function(value) {return value % 2 == 0})

==

[1, 2, 3, 4].filter(value => value % 2 === 0)