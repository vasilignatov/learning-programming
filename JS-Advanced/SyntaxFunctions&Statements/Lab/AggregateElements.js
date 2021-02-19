function agregation(arr){
    sumElements(arr);
    sumInverse(arr);
    concat(arr);
    function sumElements (arr){
        return console.log(arr.reduce((a,b) => a + b));
    }

    function sumInverse (arr) {
        let sum = 0;
        arr.forEach(element => sum += 1 / element);
        return console.log(sum);
    }

    function concat(arr) {
        return console.log(arr.join(''));
    }
}
agregation([1, 2, 3])