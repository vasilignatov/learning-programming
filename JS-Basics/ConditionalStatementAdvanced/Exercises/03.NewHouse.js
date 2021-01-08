function home(flowers, amount, budget) {
    amount = Number(amount);
    budget = Number(budget);
    let price = 0;

    switch (flowers) {
        case 'Roses':
            price = 5;
            break;
        case 'Dahlias':
            price = 3.80;
            break;
        case 'Tulips':
            price = 2.80;
            break;
        case 'Narcissus':
            price = 3;
            break;
        case 'Gladiolus':
            price = 2.50;
            break;
    }

    if (amount > 80 && flowers === "Roses") {
        price = price * 0.9;
    }else if (amount > 90 && flowers === "Dahlias") {
        price = price * 0.85;
    } else if (amount > 80 && flowers === "Tulips") {
        price = price * 0.85;
    } else if (amount < 120 && flowers === "Narcissus") {
        price = price * 1.15;
    } else if (amount < 80 && flowers === "Gladiolus") {
        price = price * 1.20;
    }
    let sum = price * amount;    
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${amount} ${flowers} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }
}