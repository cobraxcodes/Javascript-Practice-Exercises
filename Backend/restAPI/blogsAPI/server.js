
const express = require('express')
const app = express()
const port = 5000

// templating engine
app.set('view engine' , 'ejs')


// middleware
app.use(express.json())


//routes
// GET all posts, GET one post, POST new post, PUT update post, DELETE post

// port
app.listen(port, ()=>[
    console.log(`Server is listening on port ${port}`)
])