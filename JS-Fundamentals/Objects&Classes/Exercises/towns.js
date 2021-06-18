function solove(arr) {

    for (let str of arr) {
        let [town, latitude, longitude] = str.split(' | ');
        let obj = {
            town,
            lattitude: Number(latitude).toFixed(2),
            longitude:Number(longitude).toFixed(2)
        }
        console.log(obj);
    }
}
solove(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])