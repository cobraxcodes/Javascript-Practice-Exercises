const express = require('express')
const app = express()
const movies = require('./controller/controller.js')
const port = 4001;


// templating engine



// middleware
app.use(express.json())


        // ROUTES

//getall route
app.get('/movies', movies.getAll)




// port
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})