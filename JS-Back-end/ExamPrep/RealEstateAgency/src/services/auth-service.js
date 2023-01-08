const { jwtSign, jwtVerify } = require('../utils/jwtUtils');
const { SECRET } = require('../constants');
const User = require('../models/User');

exports.login = async ({ username, password }) => {
    let user = await User.findByUsername(username);

    if (!user) {
        throw new Error('Wrong Username or Password!');
    }
    try {
        let isValid = await user.validatePassword(password);
        if (isValid) {
            // CREATE TOKEN
            let payload = {
                _id: user._id,
                name: user.name,
                username: user.username
            }

            return await jwtSign(payload, SECRET);
        }

    } catch (err) {
        console.log(err);
    }

}

exports.register = (userData) => User.create(userData);
