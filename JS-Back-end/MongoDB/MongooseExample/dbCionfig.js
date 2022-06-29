const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/myDB';

const initDb = () => mongoose.connect(URI);

module.exports = initDb;

