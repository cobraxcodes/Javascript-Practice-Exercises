const bcrypt = require ('bcrypt')
const {orders, users} = require ('../model/model.js')
const {createToken} = require ('../utils/jwtUtils.js')
const blackList = [] // to keep track of logged out tokens
exports.blackList = blackList

// SIGN UP LOGIC
exports.signup = async (req, res, next) =>{
    try{
        const {username, password} = req.body
        if(username < 6){
            return res.status(401).json({message: `Username must be longer than 6 characters`})
        }
        if(password < 6){
            return res.status(401).json({message: 'Password must be longer than 8 characters'})
        }
        const existingUser = await users.findOne({username})
        if(existingUser){
            return res.status(401).json({message: 'Username exists. Please choose another username!'})
        }

        const newUser = new users ({username, password})
        const saveUser = await newUser.save()
        const token = createToken ({username})
        res.status(200).json({message: `User ${saveUser.username} sucessfully created!`, token})
    }catch(err){
        next(err)
    }
}


// LOGIN LOGIC (SIMULATION)
exports.loginUser = async (req, res,next) =>{
    try{
        const {username, password} = req.body
        const user = await users.findOne({username})
        if(!user){
            return res.status(404).json({message: 'User Not Found!'})
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if(!matchPassword){
            res.status(404).json({message: 'Password is invalid!'})
        }
        const token = createToken({username: user.username})
        res.status(200).json({mesage: `Login succesful!`, token})

    }catch(err){
        next(err)
    }
}

// LOGOUT LOGIC (SIMULATION)
exports.logoutUser = (req,res,next) =>{
    
    try{
        const token = req.headers.authorization?.split(' ')[1]
        if(token){
            blackList.push(token)
            console.log(`Blacklisted tokens: ${blackList}` )
            return res.status(200).json({
                message: `Logout Successful!`
            })
        }
    }catch(err){
        next(err)
    }
}


// CREATE logic
exports.create = async (req,res,next) =>{
    try{
        const allOrders = await orders.find()
        const newOrder = new orders (req.body)
        const saveNewOrder = newOrder.save()
        allOrders.push(newOrder)
        res.json({
            status: 200,
            message: `New Order Created!`,
            order: newOrder
        })
    }catch(err){
        next(err)
    }
}


// READ logic
exports.getAll = async(req,res,next) =>{
    try{
        const allOrders = await orders.find()
        res.json({
            status:200,
            orders: allOrders
        })
    }catch(err){
        next(err)
    }
}

// UPDATE logic
exports.update = async (req,res,next) =>{
    try{
        const order = await orders.findById(req.params.id)

        if(!order){return res.status(404).send(`No Order Found!`)}

        const orderToUpdate = await orders.findByIdAndUpdate(req.params.id, {
            name: req.body.name ?? order.name,
            quantity: req.body.quantity ?? order.quantity,
            total: req.body.total ?? order.total
        })
        res.json({
            status:200,
            message: `Successfully updated ${order.name}`,
            updatedOrder: order
        })
    }catch(err){
        next(err)
    }
}

// DELETE logic
exports.deleteOrder= async (req,res,next) =>{
    try{
        const orderToDelete = await orders.findByIdAndDelete(req.params.id)
        if(!orderToDelete){return res.status(404).send(`No Order Found!`)}
        res.json({
            status: 200,
            message: `${orderToDelete.name} deleted!`,
            deleted: orderToDelete
        })
    }catch(err){
        next(err)
    }
}

// GET BY NAME logic
exports.getByName = async (req,res,next) =>{
    try{
        const orderName = await orders.findOne({
            name: new RegExp (`^${req.params.name}$` ,"i")
        })
        if(!orderName){return res.status(404).send(`Order Not Found`)}
        res.json({
            status: 200,
            order: orderName
        })
    }catch(err){
        next(err)
    }
}

// finished