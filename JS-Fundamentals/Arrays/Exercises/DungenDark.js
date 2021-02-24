function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let command = input[0].split('|')
    let roomCounter = 0;
    let isWin = true;
    for (let i = 0; i < command.length; i++) {
        let currentRoom = command[i].split(' ');
        let roomArg = currentRoom[0];
        let roomValue = Number(currentRoom[1]);
        roomCounter++;

        if (roomArg == 'potion') {
            if (health + roomValue > 100) {
                roomValue = 100 - health;
                health = 100;
            } else {
                health += roomValue;
            }
            console.log(`You healed for ${roomValue} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (roomArg == 'chest') {
            coins += roomValue;
            console.log(`You found ${roomValue} coins.`);

        } else {
            health -= roomValue;
            if (health > 0) {
                console.log(`You slayed ${roomArg}.`);
            } else {
                console.log(`You died! Killed by ${roomArg}.`);
                console.log(`Best room: ${roomCounter}`);
                isWin = false;
                break;
            }
        }
    }
    if (isWin) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
// dungeonestDark('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
dungeonestDark('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
