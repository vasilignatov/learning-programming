function solve(input){
    let pattern = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/;
    let n = input.shift();
    for(let line of input){
        let match = line.match(pattern);
        let printMes = [];
        if (match){
            let command = match[1];
            let message = match[2]
            for(let i = 0; i < message.length ; i++){
                printMes.push(message.charCodeAt(i));
            }
            console.log(`${command}: ${printMes.join(' ')}`);
        } else {
            console.log(`The message is invalid`);
        }
    }
}
solve(
    ['2',
     '!Send!:[IvanisHere]',
    '*Time@:[Itis5amAlready]' ])

solve([
        '3',
        'go:[outside]',
        '!drive!:YourCarToACarWash',
        '!Watch!:[LordofTheRings]'
      ])

solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ])