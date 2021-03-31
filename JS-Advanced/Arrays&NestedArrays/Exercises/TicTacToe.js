function ticTacToe(moves) {

    counterMoves = 0;
    isWinner = false;
    noWinner = true;
    
    let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false]];

    function checkingField (mark, y, x){
        
        if (dashboard[y][x] === 'X' || dashboard[y][x] === 'O'){
            return console.log('This place is already taken. Please choose another!');
        } else {
            counterMoves++;
            return dashboard[y][x] = mark;
        }
    }
    
    function winChecking(mark) {

        if(dashboard[0][0] == mark && dashboard[0][1] == mark && dashboard[0][2] == mark) {isWinner = true}
        else if(dashboard[1][0] == mark && dashboard[1][1] == mark && dashboard[1][2] == mark) {isWinner = true}
        else if(dashboard[2][0] == mark && dashboard[2][1] == mark && dashboard[2][2] == mark) {isWinner = true}
        else if(dashboard[0][0] == mark && dashboard[1][0] == mark && dashboard[2][0] == mark) {isWinner = true}
        else if(dashboard[0][1] == mark && dashboard[1][1] == mark && dashboard[2][1] == mark) {isWinner = true}
        else if(dashboard[0][2] == mark && dashboard[1][2] == mark && dashboard[2][2] == mark) {isWinner = true}
        else if(dashboard[0][0] == mark && dashboard[1][1] == mark && dashboard[2][2] == mark) {isWinner = true}
        else if(dashboard[0][2] == mark && dashboard[1][2] == mark && dashboard[2][2] == mark) {isWinner = true};

        if(isWinner) {
            noWinner = false;
            return console.log(`Player ${mark} wins!`);
        }
        
    }
    
    for(let move of moves){
        let [y, x] = move.split(' ');
        [x, y] = [Number(x),Number(y)];

        if(counterMoves % 2 == 0){
            let mark = 'X';
            checkingField(mark, y, x);
            winChecking(mark);
            if(isWinner) {break};
            if(counterMoves >= 9) {break}
            
        } else {
            let mark = 'O';
            checkingField(mark, y, x);
            winChecking(mark);
            if(isWinner) {break};
            if(counterMoves >= 9) {break}
        }
    };

    if(noWinner) {
        console.log('The game ended! Nobody wins :(');
    }

    return dashboard.map(x=> x.join('	')).join('\n');

}
console.log(ticTacToe([
    '0 1',
    '0 0',
    '0 2',
    '2 0',
    '1 0',
    '1 2',
    '1 1',
    '2 1',
    '2 2',
    '0 0']));




