function lognIn(input) {
    let userName = input[0];
    let password = '';
    let index = 1;
    let command = input[index];
    let tryCounter = 0;
    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }
    if (command == password){
        console.log(`User ${userName} logged in.`);
    }
    while (command !== password) {
        command = input[index];
        tryCounter++;
        if (tryCounter == 4) {
            console.log(`User ${userName} blocked!`);
            break;
        }
        if (command !== password) {
            console.log(`Incorrect password. Try again.`);
        }
        if (command == password) {
            console.log(`User ${userName} logged in.`);
            break;
        }
        index++;
    }
}
// lognIn(['Acer','login','go','let me in','recA'])
// lognIn(['sunny','rainy', 'cloudy', 'sunny', 'not sunny'])
lognIn(['momo', 'omom'])