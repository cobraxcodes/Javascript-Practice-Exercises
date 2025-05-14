const users = require('../models/usersModel.js') 




// get all users logic
exports.getUsersController = (req,res) =>{
     const allUsers = users.getUsersModel()
      res.json(allUsers)
}


// post route logic
exports.createUserController = (newUser) =>{
   const userArray = users.getUsersModel() // access the object by inside the getUsersModel.
   userArray.push(newUser)
    return newUser;
}