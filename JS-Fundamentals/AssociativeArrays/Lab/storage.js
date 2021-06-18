function solve(input) {
    let storageMap = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);


        if (storageMap.has(product)) {
            quantity += storageMap.get(product);
        }
        storageMap.set(product, quantity);

    }
    for (let line of storageMap) {
        console.log(`${line[0]} -> ${line[1]}`);
    }
}
solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)