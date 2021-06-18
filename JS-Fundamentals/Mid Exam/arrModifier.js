function arrModifier(input){
    let arr = input.shift().split(' ').map(Number);
    for (const line of input) { 
        let [command, num1, num2] = line.split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        if (command == 'swap'){
            let temp = arr[num2];
            arr[num2] = arr[num1];
            arr[num1] = temp;
        } else if(command == 'multiply'){
            arr[num1] *= arr[num2];
        } else if(command == 'decrease'){
            arr = arr.map(x => x - 1);
        } else {
            break;
        }
    }
    console.log(arr.join(', '));
}
arrModifier(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end',
    ])