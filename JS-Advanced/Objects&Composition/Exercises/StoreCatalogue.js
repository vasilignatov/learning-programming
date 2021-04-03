function catalogue(input) {
    let catalogue = {};
    input.forEach(x => {
        let [productName, productPrice] = x.split(' : ');
        const firstLetter = productName[0];

        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }
        catalogue[firstLetter].push({productName, price: Number(productPrice)})
        catalogue[firstLetter].sort((a, b) => (a.productName).localeCompare(b.productName))

    });
    
    let output = [];
    Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(product => {
            output.push(product);
            catalogue[product].forEach(x => {
                output.push(`  ${x.productName}: ${x.productPrice}`);
            });
        })
    return output.join('\n');
}
console.log(catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));
console.log('-----------------');
console.log(catalogue([
    'Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
));