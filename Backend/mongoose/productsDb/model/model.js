const mongoose = require ('mongoose')

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    stock: {type: Number, required: true}
})

const products = mongoose.model('Products', productsSchema)


module.exports = products