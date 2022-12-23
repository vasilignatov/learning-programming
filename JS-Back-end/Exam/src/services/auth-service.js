const { jwtSign } = require('../utils/jwtUtils');
const { SECRET } = require('../constants');
const User = require('../models/User');

exports.login = async ({ email, password }) => {

    let user = await User.findByEmail(email);

    if (!user) {
        throw new Error('Wrong Email or Password!');
    }
    try {
        let isValid = await user.validatePassword(password);
        if (isValid) {
            // CREATE TOKEN
            let payload = {
                _id: user._id,
                email: user.email,
                username: user.username
            }

            return await jwtSign(payload, SECRET);
        }

    } catch (err) {
        throw new Error('Wrong Email or Password!');
    }

}

exports.register = (userData) => User.create(userData);

