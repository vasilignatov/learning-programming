function bitcoinMining(input) {
    let sumGold = 0;
    let day = 0;
    let dayBought = 0;
    let bitcoin = 0;
    let isBought = false;
    for (let index = 0; index < input.length; index++) {
        day++;
        let currentDayGold = input[index];

        if (day % 3 === 0) {
            currentDayGold *= 0.7;
        }
        sumGold += currentDayGold * 67.51;
        if (sumGold >= 11949.16) {
            sumGold -= 11949.16;
            bitcoin++;
            isBought = true;
            if (isBought) {
                dayBought = day;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (isBought) {
        console.log(`Day of the first purchased bitcoin: ${dayBought}`);
    }
    console.log(`Left money: ${sumGold.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);