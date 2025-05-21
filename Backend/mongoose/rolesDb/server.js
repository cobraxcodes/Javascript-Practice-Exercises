const express = require ('express')
const {connect} = require ('./database/database.js')
const morgan = require ('morgan')
const roles = require ('./controller/controller.js')

const app = express()
const port = 3006


// no templating engine

//middleware (morgan, express.json)
app.use(express.json())
app.use(morgan(':method :url|Status: :status|Time: :response-time ms|Date: :date[clf]'))

// connect to server
const start = async() =>{
    try{
    await connect()
    app.listen(port, ()=>{
        console.log(`Server is Listening on port ${port}`)
    })
    }catch(error){
       console.log(`Unable to connect to server ${error.message} \nStack Trace: ${error.stack}`)
    }
}

start()
// routes
app.post('/roles/new', roles.create) // post method for creating a new role
app.get('/roles', roles.getAll) // get method for getting all roles
app.patch('/roles/:id', roles.update) //patch method for updating all roles
app.delete('/roles/:id', roles.delete) // delete method for deleting a role

//global error handler
app.use((err,req,res,next) =>{
    console.log(`Something went wrong! Error: ${err.message} \n Stack Trace: ${err.stack}`)
    res.status(404).send("Resource Not Found")
})