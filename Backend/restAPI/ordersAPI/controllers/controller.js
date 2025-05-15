const product = require('../models/model.js')


// GET ALL LOGIC
exports.getAll=(req,res)=>{
    res.json(product.productsModel())
}