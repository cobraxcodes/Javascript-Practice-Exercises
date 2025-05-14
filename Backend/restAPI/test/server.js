const express = require ('express')
const app = express()
const port = 3001

// importing users
const {getUsers, createUser} = require('./models/usersModel.js')

// templating engine
app.set('view engine', 'ejs' )


// middleware
app.use(express.json()) // middleware to use for parsing response into JSON to client

            // ROUTES
app.get('/users', (req,res) =>{ // get all route
    res.json(getUsers())
})

app.post('/users', (req,res) => {  // post route (create a user)
    const newUser = req.body // extract the information from the request
    createUser(newUser) // calls the createUser function from the model and passes the request body information to it
    res.status(201).json({ // sends the status code and the object back to user with a success message
        message: "User successfully created",
        user: newUser,
    }) 


    res.send(`User successfully created!`)
})

// listen
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})