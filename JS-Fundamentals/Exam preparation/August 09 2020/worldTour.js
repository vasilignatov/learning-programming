function worldTour(input) {
    let string = input.shift();
    
    let commands = {
        'Add Stop': (string, index, newStop) => {
            index = Number(index)
            if (isIndexValid(string, index)) {
                string = string.substring(0, index) + newStop + string.substring(index);
                console.log(string);
            }
            return string;
        },
        
        'Remove Stop': (string, start, end) => {
            [start, end] = [Number(start), Number(end)];
            if (isIndexValid(string, start) && isIndexValid(string, end)) {
                string = string.slice(0, start) + string.slice(end+1);
                console.log(string);
            }
            return string;
        },
        
        'Switch': (string, oldStr, newStr) => {
            if (string.includes(oldStr)) {
                while (string.includes(oldStr)) {
                    string = string.replace(oldStr, newStr)
                }
                console.log(string);
            }
            return string;
        }
    }
    function isIndexValid(string, i) {
        if (i >= 0 && i <= string.length - 1) {
            return true;
        }
    }

    let line;
    while ((line = input.shift()) !== 'Travel') {
        let [command, arg1, arg2] = line.split(':');
        string = commands[command](string, arg1, arg2);
    }

    console.log(`Ready for world tour! Planned stops: ${string}`)
}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
])