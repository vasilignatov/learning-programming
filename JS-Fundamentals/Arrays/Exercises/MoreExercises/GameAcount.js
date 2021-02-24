function gamer(input) {
    let games = input.shift()
        .split(' ');

    for (let command of input) {
        command = command.split(' ');
        let action = command[0];
        let game = command[1];
        switch (action) {
            case 'Install':
                if (!(games.includes(game))) {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                if (games.includes(game)) {
                    games.splice(games.indexOf(game), 1);
                }
                break;
            case 'Update':
                if (games.includes(game)) {
                    let temp = games.splice(games.indexOf(game), 1);
                    games.push(temp[0]);
                }
                    break;
            case 'Expansion':
                let isGame = expansion(game);
                if (games.includes(isGame)) {
                    games.splice((game.indexOf(isGame)) + 1, 0, `${game.replace('-', ':')}`);
                }
                break;
            case 'Play!':
                return games.join(' ');
        }
    }

    function expansion(express) {
        let result = ''
        for (let i = 0; i < express.length; i++) {
            if (express[i] !== '-') {
                result += express[i];
            } else {
                break;
            }
        }
        return result;
    }


}
console.log(gamer(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

));