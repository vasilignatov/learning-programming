function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let isMagiic = false;
    let combination = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combination++;
            if (i + j === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                isMagiic = true;
                break;
            }
        }
        if (isMagiic) {
            break;
        }
    }
    if (!isMagiic) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
solve(["23",
"24",
"20"])

