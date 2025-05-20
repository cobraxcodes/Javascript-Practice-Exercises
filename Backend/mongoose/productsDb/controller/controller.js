const products = require('../model/model.js')


// CREATE LOGIC
exports.create = async (req,res,next) =>{
    try{
        const getProduct = await products.findById()
        const newProduct = new products(req.body)
        const saveProduct = await newProduct.save()
        res.json({
            status: 200,
            message: `Product created!`,
            product: newProduct
        })
    }catch(err){
        console.log("Cannot create product")
        next(err)
    }
}

// READ LOGIC
exports.getAll = async (req,res,next) =>{
    try{
        const allProducts = await products.find()
        res.json({
            status: 200,
            products: allProducts
        })
        
    }catch(err){
        console.log("Cannot get all products")
        next(err)
    }
}


// UPDATE LOGIC


// DELETE LOGIC


// READ PRODUCT NAME