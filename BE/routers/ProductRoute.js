const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const verify= require('./../middlewares/authTokenMiddlewares');
router.use('/', ProductController.getAllProduct);
module.exports = router;