function lily(age, washmashinePrice, pricePerToy) {
    age = Number(age);
    washmashinePrice = Number(washmashinePrice);
    pricePerToy = Number(pricePerToy);

    let amountBirthday = 0;
    let toys = 0;
    let sellingToys = 0;
    let count = 0;

    for (let years = 1; years <= age; years++) {
        if (years % 2 === 0) {
            amountBirthday += years * 5;
            amountBirthday -= 1;
        } else if (years % 2 !== 0) {
            count++;
        }
    }
    let sum = count * pricePerToy + amountBirthday;

    if (washmashinePrice <= sum){
        console.log(`Yes! ${(sum - washmashinePrice).toFixed(2)}`);
    }else {
        console.log(`No! ${(washmashinePrice - sum).toFixed(2)}`);
    }
}
lily("21", "1570.98", "3")