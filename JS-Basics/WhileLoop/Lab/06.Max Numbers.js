function max(input) {
    let index = 1;
    let command = input[index++];
    let biggest = Number(input[0]);

    while (command !== "Stop") {
        let current = Number(command);
        if(current > biggest) {
            biggest = current;
        }
        command = input[index++]
    }
    console.log(biggest);

}
max(["100",
    "99",
    "80",
    "70",
    "Stop"])
