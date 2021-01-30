function birthday(holePrice) {
    holePrice = Number(holePrice);

    let cake = 0.2 * holePrice;
    let drinks = cake - (0.45 * cake);
    let animator = holePrice / 3;

    console.log (holePrice + cake + drinks + animator);
    
}