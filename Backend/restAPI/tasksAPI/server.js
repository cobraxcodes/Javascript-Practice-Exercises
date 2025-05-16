const express = require('express')
const app = express()
const post = 3000


// templating engine

//middleware
app.use(express.json())


// routes


// post
app.listen(post, ()=>{
    console.log(`Server is listening on post ${post} from ${__dirname}`)
})