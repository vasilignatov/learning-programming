function moving(input) {
    let volumeHouse = input[0] * input[1] * input[2];
    let volumeBoxs = 0;
    let index = 3;
    let command = input[index++];
    let difference = 0;

    while (index <= input.length) {
        if (command === 'Done') {
            console.log(`${difference} Cubic meters left.`);
            break;
        }

        let currentBox = Number(command);
        volumeBoxs += currentBox;
        difference = volumeHouse - volumeBoxs;


        if (currentBox !== 'Done') {
            if ((volumeBoxs > volumeHouse)) {
                console.log(`No more free space! You need ${Math.abs(difference)} Cubic meters more.`);
                break;
            }
        }
        command = input[index++];

    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

