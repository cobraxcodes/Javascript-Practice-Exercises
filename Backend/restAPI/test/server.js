const express = require ('express')
const app = express()
const port = 3001

// importing users
const {getUsers, createUser, getUserId} = require('./models/usersModel.js')

// templating engine
app.set('view engine', 'ejs' )


// middleware
app.use(express.json()) // middleware to use for parsing response into JSON to client

            // ROUTES

// get all route
app.get('/users', (req,res) =>{ 
    res.json(getUsers())
})


// post route (create a user)
app.post('/users', (req,res) => {  
    const newUser = req.body // extract the information from the request
    createUser(newUser) // calls the createUser function from the model and passes the request body information to it
    res.status(201).json({ // sends the status code and the object back to user with a success message
        message: "User successfully created",
        user: newUser,
    }) 


    res.send(`User successfully created!`)
})


//get user by id route
app.get('/users/:id', (req,res) =>{
    const user = getUserId(req.params.id) // stores object information in user variable if id is found
    if(!user){ // if id is not found
        return res.status(404).send(`User ${req.params.id} not found`)  // it will send a response to the api with res.status and message
    }
    res.json(user) // if the user is found, it will send the object back
})

// listen
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})