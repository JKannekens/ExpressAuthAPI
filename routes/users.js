const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');
 
const { validateBody, schemas } = require('../helpers/routeHelper');
const UserController = require('../controllers/userController');

router.route('/register')
    .post(validateBody(schemas.authSchema), UserController.register);

router.route('/login')
    .post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false}), UserController.login);

router.route('/guarded')
    .get(passport.authenticate('jwt', { session: false }), UserController.guarded);

module.exports = router;