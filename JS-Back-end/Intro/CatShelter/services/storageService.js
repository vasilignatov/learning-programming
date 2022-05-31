const db = require('../db.json');
const fs = require('fs/promises');

const saveCat = (data) => {
    db.cats.push(data);

    let result = JSON.stringify(db, '', 2);

    return fs.writeFile('./db.json', result, { encoding: "utf8"}) // return Promise
}

const saveBreed = (data) => {
    db.breeds.push(data);

    // let result = JSON.stringify()
}


const storageService = {
    saveCat,
    saveBreed
}

module.exports = storageService;