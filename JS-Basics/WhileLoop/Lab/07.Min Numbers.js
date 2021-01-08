function min(input) {
    let index = 1;
    let command = input[index++];
    let min = Number(input[0]);

    while (command !== 'Stop') {
        let current = Number(command);

        if (current < min) {
            min = current;
        }
        command = input[index++];
    }
    console.log(min);
}
min(["100",
    "99",
    "80",
    "70",
    "Stop"])
