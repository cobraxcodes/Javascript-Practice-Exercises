const blog = require('../models/blogModel.js')

exports.getAllBlogs = (req,res) =>{
    const allBlogs = blog.blogsModel()
    res.json(allBlogs)
}