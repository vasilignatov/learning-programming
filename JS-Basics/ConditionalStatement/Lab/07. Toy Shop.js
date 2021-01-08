function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let price = Number(arg1);
    let puzzelsCount = Number(arg2);
    let dollsCount = Number(arg3);
    let bearsCount = Number(arg4);
    let minionsCount = Number(arg5);
    let trucksCount = Number(arg6);

    let totalMoney = 0;
    let profitAfterDiscount = 0;
    
    let profit = puzzelsCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let amount = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;



    if (amount >= 50) {
        let discount = 0.25 * profit;
        profitAfterDiscount = profit - discount;

        let rent = 0.1 * profitAfterDiscount;
        totalMoney = profitAfterDiscount - rent;
        let leftMoney = totalMoney - price;
        if ( leftMoney >= 0) {
            console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
        }else if (leftMoney <= 0 ){
            leftMoney = Math.abs(leftMoney);
            console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
        }

    }else if (amount < 50) {
        let rent = 0.1 * profit;
        totalMoney = profit - rent
        let leftMoney = totalMoney - price;
        if ( leftMoney > 0) {
            console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
        }else if (leftMoney < 0){
            leftMoney = Math.abs(leftMoney);
            console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`);
        }
    }
}
// toyShop ("40.8", "20", "25", "30", "50" ,"10");
toyShop ("320", "8", "2", "5", "5" ,"1");