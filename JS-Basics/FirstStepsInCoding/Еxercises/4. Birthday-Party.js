function birthday(Price) {
    price = Number(Price);

    let cake = 0.2 * price;
    let drinks = cake - (0.45 * cake);
    let animator = price / 3;

    price += cake + drinks + animator;

    console.log (price);
    
}
birthday("2250");