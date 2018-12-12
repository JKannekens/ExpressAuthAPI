const User = require('../models/user');

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

        res.json({
            user: 'created'
        })
    },

    login: async (req, res, next) => {
        console.log('Login called')
    },

    guarded: async (req, res, next) => {
        console.log('Guarded called')
    }
}