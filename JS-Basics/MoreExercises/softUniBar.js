function solve(arr) {
    let total = 0;
    for (let line of arr) {
        let pattern = /%(?<client>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>\w+)>([^\|\$%\.]+)?\|(?<amount>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>\d+(.\d{1,2})?)\$/g;
        let match = pattern.exec(line);
        if (match) {
            let totalPrice = Number(match.groups.amount) * Number(match.groups.price);
            total += totalPrice;
            console.log(`${match.groups.client}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve([
    '%InvalidName % <Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);