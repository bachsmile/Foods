const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();
const verify= require('./../middlewares/authTokenMiddlewares');
router.use('/get', ProductController.getAllProduct);
router.use('/post', ProductController.postProduct);
router.use('/list-product', ProductController.getListProduct);
module.exports = router;