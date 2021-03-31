class Product{
    productTitle;
	productPrice;
	productImg;	
    productDate;
    productName;
    productSale;
	productPrice;
	productFinalPrice;
    productCate;
    productGroupCate;
    productColor;
    productSize;   
    productSex;
    productSold;
	productDes;
	productVote;	
    constructor(){
        this.productTitle= 'NoName',
        this.productPrice= 0,
        this.productImg= 'Array.png',
        this.productDate= new Date,
        this.productName= 'NoName',
        this.productSale= 0,
        this.productFinalPrice= 0,
        this.productCate= 'NoName',
        this.productGroupCate= 'NoName',
        this.productColor= 'NoName',
        this.productSize= 0,
        this.productSex= 'NoName',
        this.productSold= 0,
        this.productDes= 'NoName',
        this.productVote= 0,
	}

}
module.exports = new Product;