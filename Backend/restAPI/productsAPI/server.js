const express = require('express')
const app = express()
const product = require('./controllers/controller.js')
const port = 3000

        // TEMPLATING ENGINE

        // MIDDLEWARE
app.use(express.json())


        // ROUTE

    //get all route
app.get('/products', product.getAll)

    //get by id route
app.get('/products/:id', product.getId)

    // create a new product
app.post('/products', product.postProduct)

    // change product (patch)
app.patch('/products/:id', product.changeProduct)




        // PORT
app.listen(port, () =>{
    console.log(`Server is listening on port ${port} ${__dirname}`)
})