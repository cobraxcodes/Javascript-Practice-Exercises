const { generateToken } = require('../../test/utils/jwtUtils.js')
const products = require('../model/model.js')
const {createToken} = require ('../utils/jwtUtils.js')



// LOGIN LOGIC
exports.loginUser = (req,res) =>{
    const {username, password} = req.body;

    if(username === 'testMe' && password ==='qwerty123'){
        const token = createToken ({username, role: 'admin'}) // payload inside token
        res.status(200).json({
            message: `Login successful`, token
        })
}else{
    res.status(401).json({
        message: `Invalid credentials`
    })
}
}


// CREATE LOGIC
exports.create = async (req,res,next) =>{
    try{
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
exports.update = async (req,res,next) =>{
    try{
        const product = await products.findById(req.params.id)
        if(!product){return res.status(404).send('Product Not Found!')}
        const updatedProduct = await products.findByIdAndUpdate(req.params.id, {
            name: req.body.name ?? product.name,
            stock: req.body.stock ?? product.stock
        })
        res.json({
            status: 200,
            message: `${updatedProduct.name},  has been updated!`,
            update: product
        })

    }catch(err){
        next(err)
    }
}

// DELETE LOGIC
exports.delete = async (req,res,next) =>{
    try{
        const product = await products.findByIdAndDelete(req.params.id)
        if(!product){return res.status(404).send(`Product Not Found`)}
        res.json({
            status:200,
            message: `${product.name} has been deleted`
        })
    }catch(err){
        next(err)
    }
}

// READ PRODUCT NAME
exports.getByName = async (req,res,next) =>{
    try{
        const product = await products.findOne({
            name: new RegExp(`^${req.params.name}$`, "i")
        })
        if(!product){return res.status(404).send(`Product Not Found`)}
        res.json({
            status: 200,
            foundProduct: product
        })

    }catch(err){
        next(err)
    }
}

//final