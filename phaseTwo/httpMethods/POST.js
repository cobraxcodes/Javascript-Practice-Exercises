// // // POST METHOD SYNTAX 
// // // w/ try-catch for error handling

// // const post = async (URL) =>{
// //     try{
// //         // fetching the API
// //         const data = await fetch(URL, {
// //              // making the post request here through API 
// //              // telling API we're making a post
// //             method: 'POST',
// //             // creating a header or object key that tells backend that this is in JSON format
// //             headers: {
// //                 'Content-type': 'application/JSON'
// //             },
// //             // converts the object inside of it into a json-formatted string to send data to server
// //             body: JSON.stringify({
// //                 title: 'Hello World!',
// //                 body: 'This is a post',
// //                 userId: 1
// //             })
// //         })
// //         // throw an error if there's a network error
// //         if (!data.ok) throw new Error(`Failed to post! Status: ${data.status}`);

// //         // opening response from data
// //         const res = await data.json()
// //         console.log(res)


// //     }catch(error){
        
// //     }
// // }

// // // calling the function  - of course :)
// // post()








// // Practice Challenge: Create a New Comment via POST
// // You're going to send a POST request to the following API endpoint:
// // https://jsonplaceholder.typicode.com/comments

// // 📝 Your task:
// // Send a comment that includes:
// // name: "Melrose"
// // email: "melrose@example.com"
// // body: "This is my practice comment!"
// // postId: 1

// // ✅ Requirements:
// // Use fetch() with POST method
// // Include headers and JSON.stringify the body
// // Handle any errors (log the HTTP status if it's not OK)
// // Log the returned data from the API
// // 💡 Bonus:
// // Try breaking the URL on purpose to test your catch block (e.g., change comments to commentz).


// // const post = async (URL) =>{
// //     try{
// //         const data = await fetch (URL, {
// //             method: 'POST',
// //            headers:{
// //             'Content-type': 'application/JSON'
// //            },
// //            body: JSON.stringify ({
// //             name: "Melrose",
// //             email: "melrose@example.com",
// //             body: "This is my practice comment",
// //             postId: 1
// //            })
// //         })
// //         if(!data.ok){
// //             throw new Error (`Fetch failed, Status: ${data.status}`)
// //         }
// //         const res = await data.json()
// //         console.log(res)
// //     }catch(error){
// //         console.error(`Error: ${error.message} ${error.stack}`)
// //     }

// // }

// // post('https://jsonplaceholder.typicode.com/comments')





// // POST CHALLENGES
// 1. Post a new user
// URL: https://jsonplaceholder.typicode.com/users
// Body: { name: "Alice", username: "alice123", email: "alice@example.com" }
// Goal: Post the user and log the returned user ID.
        //SOLUTION
// const post = async (URL) =>{
//     try{   
//         const data = await fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: "Alice",
//                 username: "alice1234",
//                 email: "alice@example.com"
                
//             })
//         })

//         if(!data.ok) {
//             throw new Error (`${data.status}`)
//         }
//         const res = await data.json()
//         console.log(res.id)
//     }catch(error){
//         console.error(`${error.message}`)
//     }
// }
// post("https://jsonplaceholder.typicode.com/users")




// 2. Post a to-do
// URL: https://jsonplaceholder.typicode.com/todos
// Body: { title: "Learn fetch POST", completed: false, userId: 3 }
// Goal: Log the id and title from the response.
        //SOLUTION
// const post = async (URL) =>{
//     try{
//         const data = await fetch(URL, {
//             method: 'POST',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: "Learn fetch POST",
//                 completed: false,
//                 userId: 3
//             })
//         })
//         if(!data.ok){
//             throw new Error (`Fetch failed,Status: ${data.status}`)
//         }
//         const res = await data.json()
//         console.log(`Title: ${res.title}`)
//         console.log(`Id: ${res.id}`)
//     }catch(error){
//         console.error(`Post unsucessful! ${error.message}`)
//     }
// }

// post("https://jsonplaceholder.typicode.com/todos")




// 3. Post multiple comments
// Post 3 different comments (in a loop or 3 calls) to:
// https://jsonplaceholder.typicode.com/comments
// Body should include a different name and email each time.
// Goal: Log success messages for each post.

        // SOLUTION
// const example = [{
//     name: "Kate",
//     email: "kate1234@email.com"
// },
// {
//     name: "Amy",
//     email: "amy1234@email.com"
// },
// {
//     name: "Anna",
//     email: "anna123@email.com"
// }
// ]

// example.forEach(sample =>{
//     const post = async (URL) =>{
//         try{
//             const data = await fetch (URL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//               body: JSON.stringify({
//                 name: sample.name,
//                 email: sample.email
//               })
//             })
//             if(!data.ok){
//                 throw new Error (`Fetch failed, status: ${data.status}`)
//             }
//             const res = await data.json()
//             console.log(res)
            
//         }catch(error){
//             console.error(`POST failed, message: ${error.message} ${error.stack}`)
//         }
//     }
//     post("https://jsonplaceholder.typicode.com/comments")
// })



// 4. Handle a fake failed POST
// Change the URL slightly (like adding /badendpoint)
// Ensure your catch block handles it gracefully.
// Goal: Practice robust error handling and show a fallback message in the DOM.
//     // SOLUTION
//     const post = async (URL) =>{
//         try{
//             const data = await fetch(URL, {
//                 method: 'POST',
//                 headers:{
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify ({
//                     name: "Miss Helen",
//                     message: "They stole me"
//                 })
//             })
//             if(!data.ok){
//                 throw new Error (`Failed to reach server ${data.status}`)
//             }
//             const res = await data.json()
//             console.log(res.name)
//             console.log(res.message)

//         }catch(error){
//             console.error(`Post failed! ${error.message} 
//                  Error Here: ${error.stack}`)
//         }
//     }

// post("https://jsonplaceholder.typicode.com/commentz")




// 5. Send an empty body
// URL: https://jsonplaceholder.typicode.com/posts
// Body: {}
// Goal: Observe how the server responds and handle it properly.
//     const post = async(URL) =>{
//         try{
//             const data = await fetch(URL, {
//                 method: 'POST',
//                 headers:{
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({

//                 })
//             })
//             if(!data.ok){
//                 throw new Error (`Fetch failed, ${data.status}`)
//             }
//             const res = await data.json()
//             console.log(res)
//         }catch(error){
//             console.error(`Post failed! ${error.message} 
//                 Error here: ${error.stack}`)
//         }
//     }

// post("https://jsonplaceholder.typicode.com/posts")




// 6. Dynamic user input POST
// Prompt the user using prompt() (in the browser) for a name, email, and comment.
// Use those to form a POST to /comments. https://jsonplaceholder.typicode.com/comments
// Goal: Practice turning input into request data.

    // solution : HTML CREATED THROUGH JSFIDDLE
// document.getElementById('postBtn').addEventListener('click', ()=>{
//     const nameInput = document.getElementById('name').value
//     const emailInput = document.getElementById('email').value
//     const commentInput = document.getElementById('comment').value
    
    
//     if(!nameInput|| !emailInput|| !commentInput){
//     return alert ("Must fill each box")
//     }
//     const post = async (URL) =>{
//     try{
//         const data = await fetch(URL, {
//                       method: 'POST',
//               headers:{
//               'Content-type': 'application/json'
//               }, 
//               body: JSON.stringify({
//               name: nameInput,
//               email: emailInput,
//               comment: commentInput
//               })
//       })
      
//       if(!data.ok){
//               throw new Error (`Post failed: ${data.status}`)
//               }
//        const res= await data.json()
//        console.log(res)
//     }catch(error){
//     console.error(`Comment failed to post! ${error.message}
//     Error Here: ${error.stack}`)
//     }
//     }
//     post("https://jsonplaceholder.typicode.com/comments")
//     })
    
    
    


// 7. Show loader + message
// Before sending a POST, display “Sending…” in the DOM.
// After the request succeeds, update to “Comment posted!”
// If it fails, show “Something went wrong.”
// Goal: Practice status indicators with async flow.


// 8. Return only specific fields
// Make a POST and destructure the returned data to log only:
// id, name, and email
// Goal: Practice destructuring POST response data.
// const post = async (URL) =>{
//         try{
//                 const data = await fetch (URL, {
//                         method: 'POST',
//                         headers:{
//                                 'Content-type': 'application/json'
//                         },
//                         body: JSON.stringify({
//                                 id: 1,
//                                 name: 'Test',
//                                 email: 'test123@email.com'      
//                         })
//                 })
//                         if(!data.ok) {
//                          throw new Error (`Data fetching failed! ${data.status}`)
//                         }

//                         const res = await data.json()
//                         const {id, name, email} = res
//                         console.log(id,name,email)

//         }catch(error){
//                 console.error(`Post failed! Please try again!
//                         Error Here: ${error.message} ${error.stack}`)
//         }
// }
// post("https://jsonplaceholder.typicode.com/posts")

// 9. Post with additional headers
// Send a POST and include custom headers:
// headers: {
//   "Content-type": "application/json",
//   "x-powered-by": "Melrose Fetch Practice"
// }
// Goal: Practice header customization.
//         const post = async (URL) =>{
//                 try{
//                         const data = await fetch (URL, {
//                                 method: 'POST',
//                                 headers:{
//                                         'Content-type': 'application/json',
//                                         'x-powered-by': 'cobrax fetch practice'
//                                 },
//                                 body: JSON.stringify({
//                                         name: 'test'
//                                 })
//                         })
//                         if(!data.ok){
//                                 throw new Error (`Fetch failed! ${data.status}`)
//                         }
//                         const res = await data.json()
//                         console.log(res)
//                 }catch(error){
//                         console.error(`Please try again!
//                                 Error here: ${error.message} ${error.stack}`)
//                 }
//         }
// post ('URLGOESHERE')




// 10. POST and render on screen
// After posting a comment, render the returned name, email, and body in a styled card using document.createElement.
// Goal: Combine POST, JSON handling, and DOM manipulation.

// used jsfiddle environment
//       <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Post Test</title>
//     <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//   <input type='text' id='name' placeholder='Name'>
//   <input type='text' id='email' placeholder='email'>
//   <input type='text' id='comment' placeholder='comment...'>
//   <br>
//   <button id='submitBtn'>
//   Submit
//   </button>
  
//   <!-- container -->
//   <div id='container'>
 
//   </div>
  
//   <!-- script -->
//     <script src="index.js"></script>
//   </body>
// </html>

// //document.getElementById('submitBtn').addEventListener('click' , ()=>{
// let nameValue = document.getElementById('name').value
// let emailValue = document.getElementById('email').value
// let commentValue = document.getElementById('comment').value
// const commentContainer = document.getElementById ('container')

// // check if all boxes are filled
// if(!nameValue || !emailValue || !commentValue){
//           const fillError = document.createElement('p')
//           fillError.textContent = "Please fill all boxes!"
//           commentContainer.appendChild(fillError)
//           return
//           }

// 	const post = async (URL) =>{
//   	try{
//     			const data = await fetch(URL, {
//           	method: 'POST',
//             headers:{
//             	'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//             name: nameValue,
//             email: emailValue,
//             comment: commentValue
//             })
//           })
//           if(!data.ok){
//           	throw new Error (`Failed to fetch data, status: ${data.status}`)
//           }
          
//           const res = await data.json()
//           console.log(res)
//           const {name,email,comment} = res
          
//           // div
//           const resDiv = document.createElement('div')
//           commentContainer.appendChild(resDiv)
          
//           //name
//           const nameDoc = document.createElement('h3')
//           nameDoc.textContent = name;
//           console.log(name)
//           resDiv.appendChild(nameDoc)
          
//           //email
//           const emailDoc = document.createElement('h4')
//           emailDoc.textContent = email;
//           console.log(email)
//           resDiv.appendChild(emailDoc)
          
//           //comment
//           const commentDoc = document.createElement('p')
//           commentDoc.textContent = comment;
//           console.log(comment)
//           resDiv.appendChild(commentDoc)
    
//     }catch(error){
//     console.error(`Post failed! 
//     Error here: ${error.message} ${error.stack}`)
//     }
//   }
//   post("https://jsonplaceholder.typicode.com/comments")
// })

