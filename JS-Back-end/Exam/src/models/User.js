const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        minlength: [10, 'The email should be at least 10 characters long']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [4, 'Username must be at least 4 chars long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [4, 'The password should be at least 4 characters long']
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            return next();
        });
});

userSchema.static('findByEmail', function (email) {
    return User.findOne({ email });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;