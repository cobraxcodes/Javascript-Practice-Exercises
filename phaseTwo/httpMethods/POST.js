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