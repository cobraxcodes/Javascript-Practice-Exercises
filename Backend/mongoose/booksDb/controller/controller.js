const books = require('../model/model.js')

// GET ALL
exports.getAll = async (req,res, next) =>{
    try{
        const allBooks = await books.find()
        res.json(allBooks)

    }catch(err){
        next(err)
    }
}