function film(budget, numberOfStat, pricePerStat) {
    budget = Number(budget);
    numberOfStat = Number(numberOfStat);
    pricePerStat = Number(pricePerStat);
    let clothingPrice = Number(pricePerStat * numberOfStat);
    let decor = Number(0.1 * budget);


    if (numberOfStat > 150) {
        clothingPrice = clothingPrice * 0.9;
    }
        let money = decor + clothingPrice;

        
    if (budget < money){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(money - budget).toFixed(2)} leva more.`);
    }else if (budget >= money){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - money).toFixed(2)} leva left.`);        
    }
}
film("9587.88", "222", "55.68");