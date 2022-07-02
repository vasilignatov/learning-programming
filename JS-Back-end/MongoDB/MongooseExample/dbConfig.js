const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/myDb';

const initDb = () =>  mongoose.connect(URI);

module.exports = initDb;