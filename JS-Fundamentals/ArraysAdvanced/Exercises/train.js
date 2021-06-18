function train(arr) {
    let wagoons = arr.shift()
                     .split(' ')
                     .map(Number);

    let maxPassengers = Number(arr.shift());

    for (let i = 0; i < arr.length; i++){
        let [command, num] = arr[i].split(' ');
        num = Number(num);

        for(let j = 0; j < wagoons.length; j++){
            
            if (command == 'Add'){
                wagoons.push(num);
                break;
            } else {
                command = Number(command)
                if (wagoons[j] + command <= maxPassengers){
                    wagoons[j] += command;
                    break; 
                } else{
                    continue;
                }
            }   
        }   
    }
    return wagoons.join(' ')
}

console.log(train([
'0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
));