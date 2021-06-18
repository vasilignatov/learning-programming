function party(input) {

    let list = {
        'VIP': [],
        'regular': []
    }
    command = input.shift();
    while (command !== 'PARTY') {
        let char = command[0];
        if (!isNaN(char)) {
            list['VIP'].push(command);
        } else {
            list['regular'].push(command);
        }
        command = input.shift();

    }

    input.forEach(name => {
        if (list['VIP'].includes(name)) {
            let i = list['VIP'].indexOf(name);
            list['VIP'].splice(i, 1);
        } else {
            let i = list['regular'].indexOf(name);
            list['regular'].splice(i, 1);
        }
    });

    console.log(list.regular.length + list.VIP.length);
    console.log(list.VIP.join('\n') + '\n' + list.regular.join('\n'));
     
}
party([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])