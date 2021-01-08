function solve(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let isMagiic = false;
    let combination = 0;

    let i = start;
    while (i <= end) {
        let j = start;
        while (j <= end) {
            if (i + j === magicNum) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                isMagiic = true;
                break;
            }
            j++
            combination++;
        }
        if (isMagiic) {
            break;
        }
        i++
    }
    if (!isMagiic) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
solve(["23",
    "24",
    "20"])

