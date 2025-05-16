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