function balane(input) {
    let total = 0;
    let index = 0;

    let i = Number(input[index]);

    while (i !== 'NoMoreMoney') {
        i = Number(input[index++]);
        if (i > 0) {
            console.log('Increase: ' + i);
            total += i;

        } else if (i < 0) {
            console.log('Invalid operation!');
            console.log('Total: ' + total.toFixed(2));
            break;
        } else {
            console.log('Total: ' + total.toFixed(2));
            break;
        }

    }




}
balane(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);
