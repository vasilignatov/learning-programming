function solution() {
    const recipesLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, flavour: 3, fat: 7 },
        eggs: { protein: 5, flavour: 1, fat: 1 },
        turkey: { protein: 10, carbohydrate: 10, flavour: 10, fat: 10 }
    }

    const microelementsAmaunt = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function managment(input) {
        let [command, arg, quantity] = input.split(' ');
        quantity = Number(quantity);
        if (command == 'restock') {
            microelementsAmaunt[arg] += quantity;
            return 'Success';
        }

        if (command == 'prepare') {
            const recipie = recipesLibrary[arg];
            for(const ingredient of Object.keys(recipie)) {
                if (microelementsAmaunt[ingredient] >=( recipie[ingredient] * quantity)) {
                    microelementsAmaunt[ingredient] -= recipie[ingredient] * quantity;
                } else {
                    return `Error: not enough ${ingredient} in stock`
                }
            }
            return 'Success';
        }

        if (command == 'report') {
            return Object.entries(microelementsAmaunt)
                .map(x => `${x[0]}=${x[1]}`)
                .join(' ')
        }
    }
    return managment;
}

let manager = solution();

console.log(manager("prepare turkey 1"))
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("report"))
