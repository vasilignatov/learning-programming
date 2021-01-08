function numbers(input) {
    let n = Number(input[0]);
    let min = Number.MAX_VALUE;

    for (let i = 1; i <= n; i++) {
        let current = Number(input[i]);
        if (min > current) {
            min = current
        }

    }
    console.log(min);
}
numbers(["3", "-10", "20", "-30"]);
