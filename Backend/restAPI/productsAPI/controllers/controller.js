const product = require('../models/model.js')


// GET ALL LOGIC
exports.getAll=(req,res)=>{
    res.json(product.productsModel())

}

//GET BY ID
exports.getId = (req,res) =>{
    const findProduct = product.productsModel().find(x => x.id == parseInt(req.params.id))

    console.log(findProduct)
    if(!findProduct){return res.status(404).send(`No Product Available`)}
    res.json({
        status: 200,
        product: findProduct
    })
}


// POST A PRODUCT
exports.postProduct = (req,res) =>{
    const products = product.productsModel()
    const newProduct = req.body
    products.push(newProduct)
    res.json({
        status: 200,
        message: `Product Added!`,
        product: newProduct
    })

}