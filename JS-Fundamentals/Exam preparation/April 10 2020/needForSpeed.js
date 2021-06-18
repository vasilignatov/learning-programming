function solve(input) {
    let carNum = Number(input.shift());
    let cars = {};
    let actions = {
        Drive(cars, car, dist, fuel) {
            [dist, fuel] = [Number(dist), Number(fuel)];
            if (cars[car].fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                cars[car].fuel -= fuel;
                cars[car].dist += dist;
                console.log(`${car} driven for ${dist} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (cars[car].dist >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        },
        Refuel(cars, car, fuel) {
            fuel = Number(fuel);
            if ((cars[car].fuel + fuel) > 75) {
                console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
                cars[car].fuel = 75;
            } else {
                cars[car].fuel += fuel
                console.log(`${car} refueled with ${fuel} liters`);
            }
        },
        Revert(cars, car, kilom) {
            kilom = Number(kilom);
            if ((cars[car].dist - kilom) < 10000) {
                cars[car].dist = 10000;
            } else {
                cars[car].dist -= kilom;
                console.log(`${car} mileage decreased by ${kilom} kilometers`);
            }
        }
    }
    for (let i = 0; i < carNum; i++) {
        let [car, dist, fuel] = input.shift().split('|');
        [dist, fuel] = [Number(dist), Number(fuel)];
        cars[car] = { dist, fuel }
    }

    let line;
    while ((line = input.shift()) !== 'Stop') {
        let [actionName, car, param1, param2] = line.split(' : ');
        actions[actionName](cars, car, param1, param2);
    }

    Object.entries(cars)
        .sort(compareCars)
        .forEach(car => {
            console.log(`${car[0]} -> Mileage: ${car[1].dist} kms, Fuel in the tank: ${car[1].fuel} lt.`);
        });

    function compareCars([nameA, paramsA], [nameB, paramsB]) {
        return paramsB.dist - paramsA.dist || nameA.localeCompare(nameB);
    }
}
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log('----------------------------');
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
