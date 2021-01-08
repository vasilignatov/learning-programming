function cake(input) {
    let picesOfCake = Number(input[0]) * Number(input[1]);
    let sumPices = 0;
    for (let i = 2; sumPices <= picesOfCake; i++) {
        let command = input[i];
        if (command === 'STOP') {
            break;
        }
        let currentPice = Number(input[i]);
        sumPices += currentPice;
    }
    if (sumPices <= picesOfCake) {
        console.log(`${picesOfCake - sumPices} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${sumPices - picesOfCake} pieces more.`);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

