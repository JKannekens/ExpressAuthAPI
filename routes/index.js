const express = require('express');
const router = express.Router;

const UserController = require('../controllers/userController');

router.route('/register')
    .post(UserController.register);

router.route('/login')
    .post(UserController.register);

router.route('/guarded')
    .post(UserController.register);

module.exports = router;