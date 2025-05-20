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
        next(err)
    }
}

// READ LOGIC


// UPDATE LOGIC


// DELETE LOGIC


// READ PRODUCT NAME