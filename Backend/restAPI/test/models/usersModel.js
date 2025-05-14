const users = [{
    id: 1, name: "Cobra", email: "Cobrax@testmail.com"
},{
    id:2, name: "X", email: "Xemail@testmail.com"
},{
    id:3, name: "test", email: "testme@testmail.com"
}
]

module.exports.getUsers = () => users

// post function here to create a new user
module.exports.createUser = (newUser) =>{ 
    users.push(newUser) // after response has been received, the new user will pushed inside the users object
    return newUser // and their information will be returned back to them
}


// get user by id function here
module.exports.getUserId = (id) =>{
   return users.find(x => x.id === parseInt(id))}