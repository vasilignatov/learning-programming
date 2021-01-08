function cake (input){
    let picesOfCake = Number(input[0]) * Number(input[1]);
    let sumPices = 0;
    let index = 2;
    while (picesOfCake >= sumPices) {
        let command = input[index];
        if (command === 'STOP'){
            break;
        }
        let currentPice = Number(input[index]);
        sumPices += currentPice;
        index++;
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
