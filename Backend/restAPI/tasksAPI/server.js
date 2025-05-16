const express = require('express')
const app = express()
const tasks = require('./controllers/controller.js')
const post = 3000


// templating engine

//middleware
app.use(express.json())


// ROUTES
//getALL
app.get('/tasks', tasks.getAll)
//getByName
app.get('/tasks/:name', tasks.getName)


// post
app.listen(post, ()=>{
    console.log(`Server is listening on post ${post} from ${__dirname}`)
})