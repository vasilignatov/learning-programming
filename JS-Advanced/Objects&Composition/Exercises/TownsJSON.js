function towns(input) {
    let result = [];
    input.shift();

    function tableRow(line) {
        let city = line.slice(2, line.lastIndexOf(' '))
        let [town, latitude, longitude] = city.split(' | ');
        [latitude, longitude] = [Number(latitude), Number(longitude)];

        return {
            Town: town,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2))
        }
    }

    input.forEach(x => result.push(tableRow(x)));

    return JSON.stringify(result);
} 
console.log(towns([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
console.log('---------');
console.log(towns([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));