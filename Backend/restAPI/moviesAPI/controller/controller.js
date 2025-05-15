const movies = require('../models/model.js')


// GET ALL ROUTE
exports.getAll=(req,res)=>{ 
   res.json(movies.moviesModel()) // always have a res.json to send back data ! sending back the movies 
} 

// GET MOVIE BY TITLE
exports.getTitle = (req,res) =>{
    const movieTitle = movies.moviesModel().find(x => x.title.toLowerCase() === req.params.title)
    if(!movieTitle){return res.status(404).send(`No Movie Found!`)}
    res.json({
        status: 200,
        movie: movieTitle
    })
}