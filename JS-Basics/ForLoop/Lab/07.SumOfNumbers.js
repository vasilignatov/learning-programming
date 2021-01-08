function solve(num) {
    let sum = 0;
    for (let i = 0; i <= num.length -1; i++) {
        let current = Number(num[i]);
        sum += current;
    }
    console.log(`The sum of the digits is:${sum}`);

}