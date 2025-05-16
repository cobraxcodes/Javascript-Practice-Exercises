const roles = require('../models/models.js')


// GET ALL
exports.getAll = (req, res) =>{
    res.json(roles.rolesModel());
}

// GET BY ID
exports.getById = (req,res) =>{
    const role = roles.rolesModel().find(x => x.id === parseInt(req.params.id))
    if(!role){return res.status(404).send(`No User found!`)}
    res.json({
        status: 200,
        user: role
    })
}

// create user
exports.createRole = (req,res) =>{
    const newRole = req.body
    const rolesArray = roles.rolesModel()
    rolesArray.push(newRole)

    res.json({
        status: 200,
        role: newRole
    })
}