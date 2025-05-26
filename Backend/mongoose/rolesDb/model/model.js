const mongoose = require ('mongoose')

const rolesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    admin: {type: Boolean, required: true}
})

rolesSchema.pre('save', function(next){
    this.name.toLowerCase()
    next()
})

rolesSchema.pre('findOneAndDelete', function (next){
    if(admin){
        console.log("Cannot delete admin role")
    }
    next()
})

const roles = mongoose.model("Roles", rolesSchema)

module.exports = roles