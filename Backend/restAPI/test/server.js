const express = require ('express')
const app = express()
const port = 3001
const users = require('./controllers/userController.js')
// importing users
// const {getUsers, createUser, getUserId, updateUser, removeUser} = require('./models/usersModel.js')

// templating engine
app.set('view engine', 'ejs' )


// middleware
app.use(express.json()) // middleware to use for parsing response into JSON to client

            // ROUTES

// get all route
app.get('/users', users.getUsersController)

// post route (create a user)
app.post('/users', (req,res) =>{
   const newUser = req.body
   users.createUserController(newUser)
   res.json({
    status: 200,
    message: "User creation successful",
    user: {newUser}
   })
})


// getUser by id route
app.get('/users/:id', (req,res) =>{
    const user = users.getUserIdController(req.params.id) // getting user that has the same id
    if(!user){return res.status(404).send(`User ${req.params.id} not found`)} // sends this if not found
    res.status(200).json(user)// sends the object back if found
})



// // post route (create a user)
// app.post('/users', (req,res) => {  
//     const newUser = req.body // extract the information from the request
//     createUser(newUser) // calls the createUser function from the model and passes the request body information to it
//     res.status(201).json({ // sends the status code and the object back to user with a success message
//         message: "User successfully created",
//         user: newUser,
//     }) 


//     res.send(`User successfully created!`)
// })


// //get user by id route
// app.get('/users/:id', (req,res) =>{
//     const user = getUserId(req.params.id) // stores object information in user variable if id is found
//     if(!user){ // if id is not found
//         return res.status(404).send(`User ${req.params.id} not found`)  // it will send a response to the api with res.status and message
//     }
//     res.json(user) // if the user is found, it will send the object back
// })

// // put route for updating user data with user id
// app.put('/users/:id', (req,res)=>{
//     const userUpdate = updateUser(req.params.id, req.body); // using parameter here for id and request body to access updated information from request
//     if(!userUpdate){
//         return res.status(404).send(`User not found`)
//     }
//     res.json({ 
//         message: `User update successful`,
//         status: 200,
//         user: {userUpdate}
//     })
// })



// //delete route
// app.delete('/users/:id', (req,res) =>{
//     const deleteUser = removeUser(req.params.id)
//     if(!deleteUser){return res.status(404).send(`User not found`)}
//     res.json({
//         status: 200,
//         message: `User ${req.params.id} deleted`,
//         user: deleteUser
//     })
// })



// listen
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})  