const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config')

signToken = user => {
    return jwt.sign({
        iss: 'CodeWorkr',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    register: async (req, res, next) => {
        if (await User.findOne({ email: req.value.body.email })) {
            return res.status(403).json({ error: 'Email is already in use' })
        }

        const newUser = new User(req.value.body);
        await newUser.save();

        const token = signToken(newUser);

        res.status(200).json({ token });
    },

    login: async (req, res, next) => {
        const token = signToken(req.user);
        res.status(200).json({ token });
    },

    guarded: async (req, res, next) => {
        res.status(200).json({ secret: "succes"})
    }
}