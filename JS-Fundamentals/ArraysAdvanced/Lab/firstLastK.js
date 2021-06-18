function firstLastK(arr){
    let k = arr.shift();
    let firstElements = arr.slice(0, k);
    let lastElements = arr.slice(-k);
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstLastK([2, 7, 8, 9])