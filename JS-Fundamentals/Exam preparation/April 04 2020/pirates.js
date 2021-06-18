function solve(input) {
    let actions = {
        Plunder(towns, townName, pop, gold) {
            [pop, gold] = [Number(pop), Number(gold)];
            let town = towns[townName];
            town.pop -= pop;
            town.gold -= gold;
            console.log(`${townName} plundered! ${gold} gold stolen, ${pop} citizens killed.`);

            if (town.gold == 0 || town.pop == 0) {
                console.log(`${townName} has been wiped off the map!`);
                delete towns[townName];
            }
        },
        Prosper(towns, townName, gold) {
            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                let town = towns[townName];
                town.gold += gold;

                console.log(`${gold} gold added to the city treasury. ${townName} now has ${town.gold} gold.`);
            }
        }
    }
    let towns = {};
    let line;

    while ((line = input.shift()) != 'Sail') {
        let [townName, pop, gold] = line.split('||');

        if (towns.hasOwnProperty(townName) == false) {
            towns[townName] = { pop: 0, gold: 0 };
        }
        towns[townName].pop += Number(pop);
        towns[townName].gold += Number(gold);
    }

    while ((line = input.shift()) != 'End') {
        let [actionName, townName, ...params] = line.split('=>');

        let action = actions[actionName];
        action(towns, townName, ...params);
    }

    let sorted = Object.entries(towns).sort(compareTowns);
    
    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (let town of sorted) {
            console.log(`${town[0]} -> Population: ${town[1].pop} citizens, Gold: ${town[1].gold} kg`);
        }
    }
    function compareTowns([nameA, townA], [nameB, townB]) {
        return townB.gold - townA.gold || nameA.localeCompare(nameB);
    }




    // Ahoy, Captain! There are {count} wealthy settlements to go to:
    // {town1} -> Population: {people} citizens, Gold: {gold} kg
}

solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])
console.log('---------------------');
// solve([
//     'Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'
// ])
