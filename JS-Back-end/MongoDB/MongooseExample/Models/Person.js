const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

modeule.exports = Person;

