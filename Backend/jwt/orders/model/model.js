const mongoose = require ('mongoose')


const ordersSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    total: {type: Number, required: true},
})


const userSchema = new mongoose.Schema({
    username: {type: String, 
        required: true,
        minlength: 4,
        maxlength: 15,
        validate: {
            validator: function (value) {
                return /^[A-Za-z]+$/.test(value)
            },
            message: props => `${props.value} is not valid.`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15,
        validate: {
          validator: function (value) {
         return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
        },
        message: props => `${props.value} is not valid. Please make a stronger password!`
    }
},
})

userSchema.pre('save', function(next) {
    this.name.toLowerCase()
    next()
})

const orders = mongoose.model('Orders', ordersSchema)
const users = mongoose.model('Users', userSchema)




module.exports = {orders , users}