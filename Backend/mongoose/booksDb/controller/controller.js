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
exports.create = async (req, res, next) =>{
    try{
        const allBooks = await books.find()
        const newBook = new books (req.body)
        const savedBook = await newBook.save()
        allBooks.push(newBook)
        res.json({
            status: 200,
            message: `New Book added!`,
            book: savedBook
        })
    }catch(err){
        next(err)
    }
}