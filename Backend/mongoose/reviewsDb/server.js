const express = require('express')
const {connect} = require('./database/database.js')
const morgan = require ('morgan')
const reviews = require ('./controller/controller.js')

const app = express ()
const port = 3005

// no templating engine

// middleware (morgan, express.json)
app.use(express.json())
app.use(morgan(':method :url|Status: :status|Time: :response-time ms| Date: :date[clf]'))

// connect to server
const start = async () =>{
    try{
        await connect()
         app.listen(port, () =>{
        console.log(`Server is listening on port ${port}`)
    })
    }catch(error){
        console.log(`Unable to connect to server! \nError: ${error.message} \nStack Trace: ${error.stack}`) 
    }
}

start()

//routes
app.post('/reviews/new', reviews.create) // post method to create a review



//global handler 
app.use((err,req,res,next) =>{
    console.err(`Something went wrong! \n StackTrace: ${err.stack}`)
    res.status(404).send(`Resource Not Found!`)
})