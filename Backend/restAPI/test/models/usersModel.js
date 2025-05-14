const users = [{
    id: 1, name: "Cobra", email: "Cobrax@testmail.com"
},{
    id:2, name: "X", email: "Xemail@testmail.com"
},{
    id:3, name: "test", email: "testme@testmail.com"
}
]

module.exports.getUsersModel = () => users

// // post function here to create a new user
// module.exports.createUser = (newUser) =>{ 
//     users.push(newUser) // after response has been received, the new user will pushed inside the users object
//     return newUser // and their information will be returned back to them
// }


// // get user by id function here
// module.exports.getUserId = (id) =>{
//    return users.find(x => x.id === parseInt(id))}


// // update user information by id
// module.exports.updateUser = (id, requestBody) =>{ // uses id (included in url) and request body (holds the updated information) parameter
//     const user = users.find(x => x.id === parseInt(id)) // searches for user through id
//     if(!user){return undefined} // if id is not found,  returns undefined
//         user.name = requestBody.name || user.name; // if found and the requestbody has a different name than the current user.name , it updates it to the new name
//         user.email = requestBody.email || user.email; // ^^^ same for email
// return user // return the new update
// }


// //deleting user by id
// module.exports.removeUser = (id) =>{
//     const index = users.find(x => x.id === parseInt(id))
//     if(!index === -1){return undefined}
//    const removeUser =  users.splice(index, 1)
//     return removeUser
// }