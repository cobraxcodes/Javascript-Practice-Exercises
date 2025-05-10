// // // basic syntax

// // // importing express framework
// // const express = require ('express');
// // // telling the app to use express
// // const app = express();
// // // setting the port to 3000
// // const port = 3000;

// // // GET REQUEST FOR ROOT URL
// // app.get('/', (req,res) =>{
// //     // sending response already parsed into JSON
// //     res.json({message: 'Welcome'})
// // });

// // // start the server
// // app.listen(port, () =>{
// //     console.log(`Server is running at http://localhost:${port}`)
// // })



// // CHALLENGES
// 🛠 Mini Challenge 1: Return a Different Message
// Task: Modify the / route to send a different message in the JSON response. For example, "message": "Hello, Express!".




// 🛠 Mini Challenge 2: Add Multiple Routes
// Task: Add another GET route, /about, which returns a JSON response like:
// {
//   "info": "This is an Express app!"
// }




// 🛠 Mini Challenge 3: Dynamic Route Parameters
// Task: Create a new route that takes a dynamic parameter (like /user/:name) and sends a personalized greeting message:
// If the user visits /user/Alice, the server should respond with:
// {
//   "greeting": "Hello, Alice!"
// }





// 🛠 Mini Challenge 4: Handling Query Parameters
// Task: Modify the / route to accept query parameters. If the user accesses the route with a query like /greet?name=John, the response should be a personalized message:
// {
//   "message": "Hello, John!"
// }




// 🛠 Mini Challenge 5: Handle Multiple HTTP Methods
// Task: Add a POST route to the / URL where users can send data to the server. The response should simply echo back the data they send (e.g., if the user sends { "name": "John" }, the response should be { "name": "John" }).
// 🛠 Mini Challenge 6: Handling Non-Existent Routes (404)
// Task: Add a catch-all route at the bottom of your routes to handle requests to undefined URLs (404). This should respond with a 404 status and a message:
// {
//   "error": "Page not found!"
// }




// 🛠 Mini Challenge 7: Customize Status Codes
// Task: For the /about route, modify the response to send back a 200 OK status code explicitly, even though it's the default for a successful GET request. You can do this using res.status(200).



// 🛠 Mini Challenge 8: Sending HTML and JSON
// Task: Set up a new route /html that sends back an HTML string instead of JSON, like:
// <h1>Welcome to the Express App!</h1>
