const movies = require('../models/model.js')


// GET ALL ROUTE
exports.getAll=(req,res)=>{ 
   res.json(movies.moviesModel()) // always have a res.json to send back data ! sending back the movies 
} 