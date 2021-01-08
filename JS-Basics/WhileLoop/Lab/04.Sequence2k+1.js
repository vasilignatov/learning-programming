function solve(input) {
    let num = Number(input[0]);
    let currentNum = 1;

    while (num >= currentNum) {
        console.log(currentNum);

        currentNum = currentNum * 2 + 1;

    }

}
solve(["31"]);

for (let i =1; i <= num; i = i * 2 + 1);