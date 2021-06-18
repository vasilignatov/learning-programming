function solve(input) {

    let str = input.shift();
    let line;
    while ((line = input.shift()) !== 'Complete') {
        if (line == "Make Upper") {
            makeUpper(str)
        } else if (line == 'Make Lower') {
            makeLower(str);
        } else if (line.includes('GetDomain')) {
            let [a, char] = line.split(' ')
            char = Number(char)
            getDomain(str, char);
        } else if (line == 'GetUsername') {
            getUsername(str);
        } else if (line.includes('Replace')) {
            let [a, char] = line.split(' ');
            replaceChar(str, char)
        } else if (line == 'Encrypt') {
            Encrypt(str)
        }

        function makeUpper(email) {
            str = email.toUpperCase();
            console.log(str);
        }

        function makeLower(email) {
            str = email.toLowerCase();
            console.log(str);
        }
        function getDomain(email, char) {
            console.log(email.slice(-char));
        }

        function getUsername(email) {
            if (email.includes('@')) {
                let username = email.slice(0, email.indexOf('@'))
                console.log(username);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }

        }

        function replaceChar(email, char) {
            if (email.includes(char)) {
                while (email.includes(char)) {
                    email = email.replace(char, '-');
                }
            }
            console.log(email);
        }

        function Encrypt(email) {
            let result = [];
            for (let i = 0; i < email.length; i++) {
                result.push(email.charCodeAt(i));
            }
            console.log(result.join(' '));
        }

    }
}
solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
])
    console.log('---------');
    solve([
        'AnotherMail.com',
        'Make Lower',
        'GetUsername',
        'Replace a',
        'Complete'
    ])
    console.log('---------');
    solve([
        'Another@Mail.com',
        'Make Lower',
        'GetUsername',
        'GetDomain 3',
        'Encrypt',
        'Complete'
    ])