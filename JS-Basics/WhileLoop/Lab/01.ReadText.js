function solve(input) {
    let index = 0;
    let text = input[index++];
    while (text !== 'Stop') {
            console.log(text);

            text = input[index];
            index++;
    }
}