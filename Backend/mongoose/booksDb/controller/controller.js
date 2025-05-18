const books = require('../model/model.js')

// GET ALL logic
exports.getAll = async (req,res, next) =>{
    try{
        const allBooks = await books.find()
        res.json(allBooks)

    }catch(err){
        next(err)
    }
}

// CREATE book logic
exports.create() = async(req, res, next) =>{
    try{
        const newBook = req.body
        const allBooks = await books.find()
        allBooks.push(newBook)
        res.json({
            status: 200,
            message: `New Book added!`,
            book: newBook
        })
    }catch(err){
        next(err)
    }
}