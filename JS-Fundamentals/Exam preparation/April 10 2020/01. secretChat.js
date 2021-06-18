function solve(input) {
    let text = input.shift();

    for (let line of input) {
        let [command, arg1, arg2] = line.split(':|:');

        if (command == 'InsertSpace') {
            text = text.substring(0, arg1) + ' ' + text.substring(arg1,);
            console.log(text);
        } else if (command == 'Reverse') {
            if (text.includes(arg1)) {
                let i = text.indexOf(arg1);
                let reversed = arg1.split('').reverse().join('');
                text = text.substring(0, i) + text.substring(i + arg1.length) + reversed;
                console.log(text);
            } else {
                console.log('error');
            }
        } else if (command == 'ChangeAll') {
            while (text.includes(arg1)) {
                text = text.replace(arg1, arg2)
            }
            console.log(text);
        }
    }
    console.log(`You have a new text message: ${text}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
console.log('-----------------');
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
