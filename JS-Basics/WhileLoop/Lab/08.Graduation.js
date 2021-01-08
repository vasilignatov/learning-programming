function graduation(input) {
    let index = 1;
    let student = input[0];
    let command = input[index++];
    let average = 0;

    while (index <= input.length) {
        let current = Number(command);
        if (current >= 4) {
            average += current;
            command = input[index++];
            
        }else {
            console.log(`${student} has been excluded at ${index - 1} grade`);
            break;
        }
    }
    if (index >= 12){
    average = average / (input.length - 1);
    console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
