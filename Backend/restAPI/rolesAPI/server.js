const express = require ('express')
const app = express()
const roles = require('./controllers/controllers.js')
const port = 3000;

        // TEMPLATING ENGINE


        // MIDDLEWARE
app.use(express.json())

        // ROUTES
//getAll
app.get('/roles', roles.getAll)

//get user by id
app.get('/roles/:id', roles.getById)

// create a role
app.post('/roles/new', roles.createRole)

        
        // PORT
app.listen(port, () =>{
    console.log(`Server is listening at port ${port} ${__dirname}`)
})