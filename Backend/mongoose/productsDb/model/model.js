const mongoose = require ('mongoose')

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    stock: {type: Number, required: true}
})

productsSchema.pre('save', function(next){
    console.log('About to save product')
    next()
}) 

productsSchema.post('findOne', function (doc, next) {
  if(!doc){return null}
  else{console.log(`${doc.name}`)}
  next()
})

const products = mongoose.model('Products', productsSchema)

module.exports = products