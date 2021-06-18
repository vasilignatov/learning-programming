function solve(input) {
    let actions = {
        Add(users, name) {
            if (users.hasOwnProperty(name)) {
                console.log(`${name} is already registered`);
            } else {
                users[name] = []
            }
        },
        Send(users, name, message) {
            users[name].push(message);
        },
        Delete(users, name) {
            if (users.hasOwnProperty(name)) {
                delete users[name];
            } else {
                console.log(`${name} not found!`);
            }
        }
    };
    let users = {};
    let line;
    while ((line = input.shift()) !== 'Statistics') {
        let [action, name, message] = line.split('->');
        actions[action](users, name, message);
    }

    let result = Object.keys(users).sort((a, b) => users[b].length - users[a].length || a.localeCompare(b));
    if (result.length) {
        console.log(`Users count: ${result.length}`);
        result.forEach(user => {
            console.log(user);
            users[user].forEach(mess => console.log(' - ' + mess))
        })
    } else {
        console.log(`Users count: ${result.length}`);
    }

    function compare(){

    }
}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
])
console.log('---------------');
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
])
console.log('---------------');
solve([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
])