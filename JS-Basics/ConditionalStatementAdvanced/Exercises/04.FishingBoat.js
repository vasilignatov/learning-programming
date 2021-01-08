function fishing(budget, season, number) {
    budget = Number(budget);
    number = Number(number);
    let price = 0;

    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    } 
    if (number <= 6) {
        price = price * 0.9;
    } else if (number <= 11) {
        price = price * 0.85;
    } else if (number > 12) {
        price = price * 0.75;
    }

    if (number % 2 === 0 && (season === "Spring" || season === 'Summer' || season === 'Winter')) {
        price = price * 0.95;
    }


    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }else if (budget < price) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);        
    }
}