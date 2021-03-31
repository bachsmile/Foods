const { request } = require('express');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authTokenMiddlewares = require('../middlewares/authTokenMiddlewares');
const bcryptMiddlewares = require('../middlewares/bcryptMiddlewares');
const md5 = require('../middlewares/md5');

router.use('/token',authTokenMiddlewares.verifyToken, UserController.token);
router.use('/login', UserController.login);
router.use('/register',bcryptMiddlewares.HashBcrypt ,UserController.register);
router.use('/list',UserController.getAllUser);

module.exports = router