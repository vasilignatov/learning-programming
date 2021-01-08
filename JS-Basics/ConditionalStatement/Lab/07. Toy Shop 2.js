function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let price = Number(arg1);
    let puzzelsCount = Number(arg2);
    let dollsCount = Number(arg3);
    let bearsCount = Number(arg4);
    let minionsCount = Number(arg5);
    let trucksCount = Number(arg6);

    let money = puzzelsCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let toys = puzzelsCount + dollsCount + bearsCount + minionsCount + trucksCount;
    

    if (toys >= 50 ) {
        money = money + 0.75;
    }
         money = money * 0.9;
         let diff = money - price; 

    if (money >= price){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);

    }else {
        diff = Math.abs(diff);
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}  
toyShop ("320", "8", "2", "5", "5" ,"1");
