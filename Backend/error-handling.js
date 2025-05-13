// // // basic syntax - adding in the bottom of routes
// // // app.use((err, req,res, next) =>{
// // //     console.error(err.stack)
// // //     res.status(404).send(`${res.status} Resource Not Found`)
// // // })


// // Mini Challenge 1: Handling User Not Found (404)
// // Route: GET /userProfiles/:id
// // If the user doesn't exist in your data, throw a 404 error saying "User not found."
// // Make sure to pass the error to your error-handling middleware.

            // SOLUTION:
// const products = require ('../model/productModel.js')



// exports.productController = (req,res) =>{
//     const productList = products.productModel()
//     res.render('index', {productList})
// }

// exports.userProfiles = (req, res, next) =>{
//     const users = user.userModel()
//     const findUser = users.find(user => user.id === req.params.id)

//     if(!findUser){
//         const error = new Error ('User not found')
//         error.status = 404
//         return next (error)
// }
// res.render('profile', {user: findUser})
// }


// // route in app.js
// app.get("/userProfiles/:id", user.userProfiles)

// app.use((req, res, next) => {
//   res.status(404).send('Sorry, we can’t find that page!');
// });



//app listen goes here




// // Mini Challenge 2: Validation Error (400)
// // Route: PUT /userProfiles/:id
// // If a user tries to update their profile without providing a name, age, or email, throw a 400 error with a message like: "Missing required fields: name, age, email."
// // Ensure you're catching this error in the controller and passing it to the error handler.





// // Mini Challenge 3: 500 Server Error (General Fail)
// // Route: POST /userProfiles
// // Simulate a 500 server error (e.g., a random failure like a database connection problem). Throw a generic error with the message "Something went wrong on the server!".
// // Hint: Use next(new Error("message")) to simulate this.





// // Mini Challenge 4: 404 Page for Non-Existing Routes
// // Route: Make a random route that does not exist (e.g., /randomRoute).
// // Use the catch-all 404 error middleware to respond with a custom 404 message, like "Oops, this page doesn’t exist!"
// // Ensure that this 404 middleware runs after all routes.





// // Mini Challenge 5: Custom Error Object
// // Route: DELETE /userProfiles/:id
// // Create a custom error object for when a user cannot be deleted (e.g., because they’re not in the database). 
// // Set a custom error message like "Cannot delete user: User not found."
// // Throw this error and ensure it’s passed correctly to the error handler.