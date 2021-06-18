function vacation(group, type, day) {
    let price = 0;
    let totalPrice = 0;
    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
                break;
        }
    } else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
                break;
        }
    } else if (type === 'Regular'){
        switch (day) {
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
                break;
        }
    }
    if (type === 'Students' && group >= 30) {
        price *= 0.85;
        totalPrice = price * group;
    } else if (type === 'Business' && group >= 100) {
        group -= 10;
        totalPrice = group * - price;
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        price *= 0.95;
        totalPrice = price * group;
    } else {
        totalPrice  = price * group;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday")