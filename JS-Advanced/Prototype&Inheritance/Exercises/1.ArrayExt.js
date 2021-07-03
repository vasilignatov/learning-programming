(function solve() {
Array.prototype.last = function() {
    return this[this.length - 1];
}
Array.prototype.skip = function(n) {
    let result  = [];
    for(let i = n; i < this.length; i++) {
        result.push(this[i])
    }
    return result
}

Array.prototype.take = function(n) {
    return this.splice(0, n);
}

Array.prototype.sum = function() {
    return this.reduce((acc, c) => acc + c, 0);
}

Array.prototype.average = function() {
    return this.sum() / this.length;
}
}) ()


let arr = [1, 2, 3, 4, 5];
console.log(arr.average());