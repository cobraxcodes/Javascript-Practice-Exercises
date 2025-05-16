const roles = require('../models/models.js')

// GET ALL
exports.getAll = (req, res) =>{
    res.json(roles.rolesModel());
}