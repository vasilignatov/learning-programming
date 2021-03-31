
let str = 'VasilIgnatov';
myArr = [2, 4, 6]; //4
myArr2 = [2, 4, 6, 10, 150, 25];
names = [['George', 'Vasil', 'Ignat'],
        ['George', 'Vasil', 'Ignat'],
        ['George', 'Vasil', 'Ignat']];

// console.log(str.substring(2, 2));
let sum = myArr2.reduce((acc, curr) => acc + curr);
let min = myArr2.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
let max = myArr2.reduce((acc, curr) => acc <= curr ? curr : acc, 0);
let avg = myArr2.reduce((acc, c, i, a) => acc + c / a.length, 0);
 
console.log(concat);


