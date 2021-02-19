function sumNums(n, m) {
    [n, m] = [Number(n), Number(m)];
    let result = 0;
    for (let i = n; i <= m; i++) {
        result += i;
    }
    console.log(result);
}
sumNums('1', '5')
sumNums('-8', '20')