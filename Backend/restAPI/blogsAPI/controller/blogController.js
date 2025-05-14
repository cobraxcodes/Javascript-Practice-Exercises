const blog = require('../models/blogModel.js')


// GET ALL ROUTE LOGIC
exports.getAllBlogs = (req,res) =>{
    const allBlogs = blog.blogsModel()
    res.json(allBlogs)
}

// GET A BLOG BY ID ROUTE
exports.getBlogById = (id) =>{
  return foundBlog = blog.blogsModel().find(x => x.id === parseInt(id));
  
}