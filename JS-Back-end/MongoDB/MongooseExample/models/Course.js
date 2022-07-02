const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    students: {
        type: Number,
        required: false,
        min: [2, 'Students must more thean 2!'],
        max: [20, 'Students must less thean 2!']
    }
});


personSchema.methods.description = function() {
    return `${this.name} course have a ${this.students || 0} students!`;
}


personSchema.virtual('haveStuds')
    .get(function() {
        return `Is ${this.students > 0}!`;
    });


personSchema.path('name').validate(function() {
    return this.name.length > 2;
}, 'Course name must be more the 2 characters long!')

const Course = mongoose.model('Course', personSchema);


module.exports = Course;


