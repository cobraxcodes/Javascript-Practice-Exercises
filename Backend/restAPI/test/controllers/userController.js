const users = require('../models/usersModel.js') 




// get all users logic
exports.getUsersController = (req,res) =>{
     const allUsers = users.getUsersModel()
      res.json(allUsers)
}


// get user by id
exports.getUserIdController = (id) =>{ // defining id here as a parameter
    return users.getUsersModel().find(x => x.id === parseInt(id))
}

// post route logic
exports.createUserController = (newUser) =>{ // new User is the variable that will contain the request body and information for new user
   const userArray = users.getUsersModel() // access the array inside the getUsersModel object.
   userArray.push(newUser) // pushing new user inside the array
    return newUser;
}

