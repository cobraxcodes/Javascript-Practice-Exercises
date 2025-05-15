const express = require('express')
const app = express()
const product = require('./controllers/controller.js')
const port = 3002

        // TEMPLATING ENGINE

        // MIDDLEWARE
app.use(express.json())


        // ROUTE

    //get all route
app.get('/products', product.getAll)


        // PORT
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})