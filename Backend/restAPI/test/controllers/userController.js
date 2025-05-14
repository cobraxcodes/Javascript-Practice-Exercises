const getUser = require('../models/usersModel.js')

exports.getUsersController = (req,res) =>{
     const allUsers = getUser.getUsersModel()
      res.json(allUsers)
}
