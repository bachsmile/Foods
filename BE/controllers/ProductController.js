const Product = require('../models/ProductModel');

class ProductController {
    getAllProduct = async(req,res) => {
        let products = {
            data:await Product.find()
        }
        res.json(products)
    }
    getProductId = async (req,res) => {

    }
    getProductPage = async (req,res) => {

    }
    postProduct = async (req, res) =>{

    }
    updateProduct = async (req,res) =>{

    }
    deleteProduct = async (req,res) =>{

    }
    searchProduct = async (req,res) =>{

    }
}

module.exports = new ProductController