function solution(n) {
    let number = n;

    return function (nextNum) {
        return number + nextNum;   
    }
}
let add5 = solution(5);

console.log(add5(2));
console.log(add5(3));
