// // POST METHOD SYNTAX 
// // w/ try-catch for error handling

// const post = async (URL) =>{
//     try{
//         // fetching the API
//         const data = await fetch(URL, {
//              // making the post request here through API 
//              // telling API we're making a post
//             method: 'POST',
//             // creating a header or object key that tells backend that this is in JSON format
//             headers: {
//                 'Content-type': 'application/JSON'
//             },
//             // converts the object inside of it into a json-formatted string to send data to server
//             body: JSON.stringify({
//                 title: 'Hello World!',
//                 body: 'This is a post',
//                 userId: 1
//             })
//         })
//         // throw an error if there's a network error
//         if (!data.ok) throw new Error(`Failed to post! Status: ${data.status}`);

//         // opening response from data
//         const res = await data.json()
//         console.log(res)


//     }catch(error){
        
//     }
// }

// // calling the function  - of course :)
// post()








// Practice Challenge: Create a New Comment via POST
// You're going to send a POST request to the following API endpoint:
// https://jsonplaceholder.typicode.com/comments

// 📝 Your task:
// Send a comment that includes:
// name: "Melrose"
// email: "melrose@example.com"
// body: "This is my practice comment!"
// postId: 1

// ✅ Requirements:
// Use fetch() with POST method
// Include headers and JSON.stringify the body
// Handle any errors (log the HTTP status if it's not OK)
// Log the returned data from the API
// 💡 Bonus:
// Try breaking the URL on purpose to test your catch block (e.g., change comments to commentz).


const post = async (URL) =>{
    try{
        const data = await fetch (URL, {
            method: 'POST',
           headers:{
            'Content-type': 'application/JSON'
           },
           body: JSON.stringify ({
            name: "Melrose",
            email: "melrose@example.com",
            body: "This is my practice comment",
            postId: 1
           })
        })
        if(!data.ok){
            throw new Error (`Fetch failed, Status: ${data.status}`)
        }
        const res = await data.json()
        console.log(res)
    }catch(error){
        console.error(`Error: ${error.message} ${error.stack}`)
    }

}

post('https://jsonplaceholder.typicode.com/comments')