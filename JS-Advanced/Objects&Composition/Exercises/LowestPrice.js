// function lowestPrice(input){
//     let products = {}
//     for(let line of input){
//         let [town, product, price] = line.split(' | ');
//         price = Number(price);
//         if(products[product]) {
//             if(products[product][1] > price){
//                 products[product] = [town, price];
//             }
//         } else {
//             products[product] = [town, price];
//         }
//     }
    
//     for(let key of Object.keys(products)){
//         console.log(`${key} -> ${products[key][1]} (${products[key][0]})`);
//     }
// }

function lowestPrice(input){
    let result = [];
    let products = {};
    input.forEach((x) => {
        let [town, product, price] = x.split(' | ');
        price = Number(price);
        if(!products[product]){
            products[product] = [price, town];
        }
        if(products[product][0] > price) {
            products[product] = [price, town];
        }
    });

    for(let product of Object.entries(products)) {
        let [productName, [price, town]] = product;
        result.push(`${productName} -> ${price} (${town})`)
    }
    return result.join('\n');
}
console.log(lowestPrice([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
))