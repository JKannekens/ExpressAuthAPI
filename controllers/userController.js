const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config');

signToken = user => {
    return JWT.sign({
        iss: 'JK',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setTime(new Date().getDate() + 1)
    }, JWT_SECRET );
}

module.exports = {
    register: async (req, res, next) => {
        const foundUser = await User.findOne({
            email: req.value.body.email
        });

        if (foundUser) {
            return res.status(403).json({
                error: 'Email is already in use'
            });
        }

        const newUser = new User(req.value.body);
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },

    login: async (req, res, next) => {
        console.log('Login called')
    },

    guarded: async (req, res, next) => {
        console.log('Guarded called')
    }
}