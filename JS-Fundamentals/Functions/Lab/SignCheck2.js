function signCheck(a, b, c) {
    let result = '';
    if (a >= 0 && b >= 0 && c >= 0) {
        result = 'Positive';
    } else if (a < 0 && b < 0 && c >= 0) {
        result = 'Positive';
    } else if (a >= 0 && b < 0 && c < 0) {
        result = 'Positive';
    }  else if (a < 0 && b == 0 && c >= 0){
        result = 'Positive';
    } else if (a < 0 && b >= 0 && c < 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    return result;
}
console.log(signCheck(-1, 0, 1))