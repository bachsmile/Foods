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
    getListProduct = async (req,res) => {
        let PAGE = parseInt(req.query.page);
        let LIMIT = parseInt(req.query.limit);
        let CATE = req.query.category || true;
        let SKIP = (PAGE - 1) * LIMIT
        await Product.find((CATE === 'undefined') ? {} : {productCate: CATE})
        .skip(SKIP).limit(LIMIT).exec((err,product) =>{
            Product.countDocuments((err, count) => {
                // if (err) return next(err);
                res.json(
                    { 
                       data: { 
                            product,
                            current: PAGE,
                            pages: Math.ceil(count / LIMIT)
                       }
                    }
                )
            })
        })
        // res.json(products)
    }
    postProduct = async (req, res) =>{
        let product = Product
        product = req.body
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