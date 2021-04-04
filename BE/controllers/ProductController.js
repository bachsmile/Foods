const notiResData = require('../class/notiResData');
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
        let product = Product
        product = req.body
        console.log(product);
        try {
            await Product.create(product);
            notiResData.customResNoti(req,res,200);
        } catch (error) {
            notiResData.customResNoti(req,res,200,error);
        }
    }
    updateProduct = async (req,res) =>{

    }
    deleteProduct = async (req,res) =>{

    }
    searchProduct = async (req,res) =>{

    }
}

module.exports = new ProductController