function listManipulator(input) {
    let list = input.shift().split(', ');
    let line = input.shift();

    while (!(line.includes('Report'))) {
        let [command, name, newName] = line.split(' ');
        if (command === 'Blacklist') {
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1, 'Blacklisted');
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        }
        if (command === 'Error') {
            let index = name;
            let oldName = list[index];
            if (list[index] !== 'Blacklisted' && list[index] !== 'Lost') {
                list.splice(index, 1, 'Lost');
                console.log(`${oldName} was lost due to an error.`);
            }

        }
        if (command === 'Change') {
            let index = name;
            if (index < list.length && index >= 0) {
                let oldName = list[index];
                list.splice(index, 1, newName);
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        }
        line = input.shift();
    }
    let blacklistedNamesCount = list.filter(name => name === 'Blacklisted').length;
    let lostNamesCount = list.filter(name => name === 'Lost').length;
    console.log(`Blacklisted names: ${blacklistedNamesCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(`${list.join(' ')}`);
}
listManipulator((["Blacklisted, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Blacklist Eddie",
    "Report"])
)
