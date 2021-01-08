function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let floor = floors; floor >= 1; floor--) {
        let type = '';
        let output = '';

        if (floor === floors){
            type = 'L';
        } else if (floor % 2 !== 0){
            type = 'A'
        }else {
            type = `O`
        }

        for (let room = 0; room < rooms; room++){
            output += `${type}${floor}${room} `;
        }
        console.log(output);
    }

}
solve(['6', '4'])