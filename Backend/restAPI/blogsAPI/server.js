
const express = require('express')
const app = express()
const port = 3000
const blogs = require('./controller/blogController.js')

// templating engine
app.set('view engine' , 'ejs')


// middleware
app.use(express.json())


//routes
// GET all posts, GET one post, POST new post, PUT update post, DELETE post

// GET ALL ROUTE (does not contain request or response because there's no body needed inside request and response
app.get('/blogs', blogs.getAllBlogs)

//GET a blog by id
app.get('/blogs/:id', (req,res) =>{
    const foundBlog = blogs.getBlogById(req.params.id)
    if(!foundBlog){res.status(404).send(`User Not Found`)}
   res.status(200).json(foundBlog)
})



// port
app.listen(port, ()=>[
    console.log(`Server is listening on port ${port}`)
]) 

