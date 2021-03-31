function town(townsArr) {
    let citys = {};
    let result = [];
    townsArr.forEach(town => {
        let [name, population] = town.split(' <-> ');
        population = Number(population)
        if(!citys[name]) {
            citys[name] = 0
        }
        citys[name] += population;
    });
    for(const city in citys) {result.push(`${city} : ${citys[city]}`)}
    return result.join('\n');
}
console.log(town(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
));