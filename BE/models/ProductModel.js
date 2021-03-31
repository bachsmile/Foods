const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    productTitle: String,
	productPrice: String,
	// productImg: Array,
	// productDate: Date,
	productName: String,
    // productSale: Number,
	// productPrice: Number,
	// productFinalPrice: Number,
    // productCate: String,
    // productGroupCate: String,
    // productColor: String,
    // productSize: Array,
    // productSex: String,
    // productSold: Number,
	// productDes: String,
	// productVote: Array,
})
const Product = mongoose.model('Product',productSchema, 'products');
module.exports = Product;