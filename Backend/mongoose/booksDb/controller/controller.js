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

// DELETE BOOK LOGIC
exports.delete = async (req, res, next) => {
    try{
        const book = await books.findByIdAndDelete(req.params.id)
        if(!book){return res.status(404).send(`Book not found!`)}
        res.json({
            status:200,
            message: `${book.title} has been deleted`,
            deletd: book
        })
    }catch (err) {
        next(err);
    }
};
