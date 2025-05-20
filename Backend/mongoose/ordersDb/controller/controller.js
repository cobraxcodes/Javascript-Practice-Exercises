const orders = require ('../model/model.js')


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

        const orderToUpdate = order.findByIdAndUpdate({
            name: req.body.name ?? order.name,
            quantity: req.body.quanity ?? order.quantity,
            total: req.body.total ?? order.total
        })
        res.json({
            status:200,
            message: `Successfully updated ${order.name}`,
            updatedOrder: orderToUpdate
        })
    }catch(err){
        next(err)
    }
}

// DELETE logic
exports.delete = async (req,res,next) =>{
    try{
        const orderToDelete = orders.findByIdAndDelet(req.params.id)
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