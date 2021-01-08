function solve(input) {
    let bottelsVolume = Number(input[0]) * 750;
    let index = 1;
    let command = input[index];
    let currentDetergent = 0;
    let washedChinii = 0;
    let washedTendjeri = 0;

    while (command !== 'End' ) {
        if (index === input.length){
            break;
        }
        let syd = Number(command)

        if (index % 3 === 0) {
            currentDetergent += syd * 15
            washedTendjeri += syd;
        } else {
            currentDetergent += syd * 5
            washedChinii += syd;
        }
        index++;
        command = input[index];
        


    }
    if (bottelsVolume >= currentDetergent) {
        console.log(`Detergent was enough!`);
        console.log(`${washedChinii} dishes and ${washedTendjeri} pots were washed.`);
        console.log(`Leftover detergent ${bottelsVolume - currentDetergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${currentDetergent - bottelsVolume} ml. more necessary!`);
    }
}
solve(['1',
    '10',
    '15',
    '10',
    '12',
    '13',
    '30'])

