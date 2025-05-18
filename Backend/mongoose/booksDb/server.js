const express = require('express')
const app = express()
const books = require('./controller/controller.js')
const port = 3001
const connect = require('./database/database.js')

// no templating engine

//middleware
app.use(express.json())


// connecting to the in-memory server
connect()

//routes
app.get('/books', books.getAll)





// global error handler here after routes
app.use((err, req, res, next) =>{ // global error handler
    console.error(`Stack trace: ${err.stack}`)
    res.status(404).send(`Resource Not Found`)
});


// port
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})