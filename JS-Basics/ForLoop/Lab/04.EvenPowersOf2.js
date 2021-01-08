function solve(n) {
    n = Number(n);

    for (let pow = 0; pow <= n; pow += 2) {
        console.log(Math.pow(2, pow));
    }
}
function solve("2"); 