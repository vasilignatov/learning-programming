function factory(input) {
    let { 
        model,
        power,
        color,
        carriage,
        wheelsize } = input;

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else if (power <= 200) {
            return { power: 200, volume: 3500 };
        };
    }

    function getCarriage(color, carriage) {
        if (carriage == 'hatchback') {
            return { type: 'hatchback', color: color }
        } else if (carriage == 'coupe') {
            return { type: 'coupe', color: color }
        }
    }

    function getWheels(wheelsize) {
        size = wheelsize % 2 !== 0 ? wheelsize : wheelsize - 1;
        return Array(4).fill(size, 0, 4);
    }

    return {
        model,
        engine: getEngine(power),
        carriage: getCarriage(color, carriage),
        wheels: getWheels(wheelsize)
    }
}

console.log(factory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}
));
// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
