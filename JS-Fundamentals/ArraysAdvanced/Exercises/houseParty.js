function houseParty(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, is, command, going] = arr[i].split(' ');
        if (command !== 'not'){
            if (!list.includes(name)){
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if(list.includes(name)){
                list.splice(list.indexOf(name), 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    return list.join('\n');
}
console.log(houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']))


