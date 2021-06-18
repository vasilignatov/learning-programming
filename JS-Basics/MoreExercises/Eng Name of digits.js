function englishNameLastDigit(input) {
    input = String(input)
    let index = input.length - 1;
    let lastDigit = input.charAt(index);
    let output = '';
    switch (lastDigit) {
        case '1':
            output = 'one';
            break;
        case '2':
            output = 'two';
            break;
        case '3':
            output = 'three';
            break;
        case '4':
            output = 'four';
            break;
        case '5':
            output = 'five';
            break;
        case '6':
            output = 'six';
            break;
        case '7':
            output = 'seven';
            break;
        case '8':
            output = 'eight';
            break;
        case '9':
            output = 'nine';
            break;
        case '0':
            output = 'zero';
            break;
    }
    console.log(output);
}
englishNameLastDigit(1654)