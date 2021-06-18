function deckOfCards(input) {
    let list = input.shift().split(', ');
    let num = Number(input.shift());
    
    while (num > 0) {
        let line = input.shift();
        let [command, type, str] = line.split(', ');
        if (command == 'Add') {
            if (list.includes(type)) {
                console.log(`Card is already bought`);
            } else {
                console.log(`Card successfully bought`);
                list.push(type);
            }
        } else if (command == 'Remove') {
            if (list.includes(type)) {
                console.log(`Card successfully sold`);
                list.splice(list.indexOf(type), 1);
            } else {
                console.log(`Card not found`);
            }
        } else if (command == 'Remove At') {
            let index = type;
            if (index < list.length) {
                list.splice(index, 1);
                console.log(`Card successfully sold`);
            } else {
                console.log(`Index out of range`);
            }
        } else if (command == 'Insert') {
                let index = type;
                if (index < list.length) {
                    if (list.includes(str)){
                        console.log(`Card is already bought`);
                    } else {
                        console.log(`Card successfully bought`);
                        list.splice(index, 0, str)
                    }
                } else {
                    console.log(`Index out of range`);
                }
        
        }
        num--;
    }
    console.log(list.join(', '));
}
deckOfCards((["T-34-85 Rudy, SU-100Y, STG",
    "3",
    "Add, King Tiger(C)",
    "Insert, 2, IS-2M",
    "Remove, T-34-85 Rudy"])
)