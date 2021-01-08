function vacantion(days, place, mark) {
    days = Number(days);
    let price = 0;
    let nights = days - 1;

    switch (place) {
        case 'room for one person':
            price = 18 * nights;
            break;
        case 'apartment':
            price = 25 * nights;
            if (days < 10) {
                price = price * 0.7;
            } else if (days <= 15 && days >= 10) {
                price = price * 0.65;
            } else if (days > 15) {
                price = price * 0.5;
            }
            break;
        case 'president apartment':
            price = 35 * nights;
            if (days < 10) {
                price = price * 0.9;
            } else if (days <= 15 && days >= 10) {
                price = price * 0.85;
            } else if (days > 15) {
                price = price * 0.8;
            }
            break;
    }
    if (mark === 'positive'){
        price = price * 1.25;
    }else if (mark === 'negative'){
        price = price * 0.9;
    }
    console.log(price.toFixed(2));
}
vacantion('30','president apartment', 'negative')


