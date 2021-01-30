function fruitsShop(strawberryPrice, banannasAmount, orangesAmount, maliniAmount, strowberryAmount) {
    strawberryPrice = Number(strawberryPrice);
    banannasAmount = Number(banannasAmount);
    orangesAmount = Number(orangesAmount);
    maliniAmount = Number(maliniAmount);
    strowberryAmount = Number(strowberryAmount);

    let maliniPrice = Number(strawberryPrice / 2);
    
    let orangesPrice = Number(maliniPrice - 0.4 * maliniPrice);
    
    let banannasPrice = Number(maliniPrice - 0.8 * maliniPrice);
    
    let price = strawberryPrice * strowberryAmount + banannasAmount * banannasPrice + orangesAmount * orangesPrice + maliniPrice * maliniAmount;
    console.log(price.toFixed(2));
    
}