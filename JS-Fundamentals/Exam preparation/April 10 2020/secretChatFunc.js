function solve(input) {
    let text = input.shift();
    let commands = {
        'InsertSpace': (text, arg1) => {
            arg1 = Number(arg1);
            text = text.substring(0, arg1) + ' ' + text.substring(arg1,);
            console.log(text);
            return text;
        },
        'Reverse': (text, arg1) => {
            if (text.includes(arg1)) {
                let i = text.indexOf(arg1);
                let reversed = arg1.split('').reverse().join('');
                text = text.substring(0, i) + text.substring(i + arg1.length) + reversed;
                console.log(text);
            } else {
                console.log('error');
            }
            return text;
        },
        'ChangeAll': (text, arg1, arg2) => {
            while (text.includes(arg1)) {
                text = text.replace(arg1, arg2)
            }
            console.log(text);
            return text;
        },
        'Reveal': (text) => { console.log(`You have a new text message: ${text}`); }
    }
    for (let line of input) {
        let [commandName, arg1, arg2] = line.split(':|:');

        text = commands[commandName](text, arg1, arg2);
    }
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