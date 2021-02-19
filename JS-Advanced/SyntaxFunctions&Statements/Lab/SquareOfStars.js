function square(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += '* '.repeat(num) + '\n';
    }
    console.log(result);
}
square(2)
square(5)
square(10)