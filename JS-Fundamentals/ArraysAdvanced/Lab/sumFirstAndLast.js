function sumFirstLast(arr){
    function first(arr){
        let first = Number(arr.shift())
        return first;
    }
    function last(arr){
        let last = Number(arr.pop());
        return last;
    }
    let sum = last(arr) + first(arr);
    return sum;
}
console.log(sumFirstLast(['10', '20', '30']));