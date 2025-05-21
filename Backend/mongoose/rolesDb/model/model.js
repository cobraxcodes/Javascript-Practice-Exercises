const mongoose = require ('mongoose')

const rolesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    admin: {type: Boolean, required: true}
})

const roles = mongoose.model("Roles", rolesSchema)

module.exports = roles