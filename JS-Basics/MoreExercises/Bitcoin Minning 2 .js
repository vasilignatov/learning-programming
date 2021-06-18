function bitcoin(input) {
    let day = 0;
    let bitcoinBought = 0;
    let dayOfFirstBought = 0;
    let money = 0.00;
    let isBought = false;

    for (let i = 0; i < input.length; i++) {

        let currentDayGold = input[i];
        
        day++;

        if (day % 3 == 0) {
            currentDayGold *= 0.7;
        }
        money += parseInt(currentDayGold * 6751);

        if (money >= 1194967) {
            money -= 1194967;
            bitcoinBought++;
            if (!isBought){
            dayOfFirstBought = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (!isBought){
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBought}`);
    }
    console.log(`Left money: ${(money/100)} lv.`);

}
bitcoin([100, 200, 300])