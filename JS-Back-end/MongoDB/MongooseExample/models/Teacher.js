const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: {
        type: [String],
        required: true
    }
});

const Pet = mongoose.model('Pet', teacherSchema);

module.exports = Pet;
