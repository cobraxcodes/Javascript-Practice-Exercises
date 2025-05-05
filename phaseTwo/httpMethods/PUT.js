// // // SYNTAX
// // // the same as post just different method and same body format - only change what needs to be updated

// // const put = async (URL) =>{
// //     try{
// //         const data = await fetch (URL, {
// //             method: 'PUT',
// //             headers:{
// //                 'Content-type': 'application/json'
// //             },
// //             // follow the same body and format. only change what needs to be updated
// //             body: JSON.stringify({
// //                 email: "test123@email.com",
// //                 name: "Changed name",
// //                 id: 1
// //             })
// //         })
// //             if(!data.ok){
// //                 throw new Error (`Update error! ${data.status}`)
// //             }
// //             const res = await data.json()
// //             console.log(res)
// //     }catch(error){
// //         console.error(`Something went wrong ${error.message}
// //             \n Error Here: ${error.stack}`)
// //     }
// // }



// // CHALLENGES

// 🔧 Challenge 1: Update a User's Email
// Goal: Use a PUT request to update the email of a user with ID 1.
// Example URL: https://jsonplaceholder.typicode.com/users/1
// What to send in body:
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "email": "updated_email@example.com"
// // }
    // solution:
// const put = async (URL) =>{
//     try{
//         const data = await fetch(URL, {
//             method: 'PUT',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 name: "Leanne Graham",
//                 email: "theNewEmailUpdate@example.com"
//             })
//         })
//             if(!data.ok){
//                 throw new Error (`No response from server! Please try again! ${data.status}`)
//             }
            
//         const res = await data.json()
//         console.log(res)
//         console.log(`Updated Email to ${res.email}`)
//     }catch(error){
//         console.error(`Post Failed! ${error.message} \n Error Here: ${error.stack}`)
//     }
// }

// put("https://jsonplaceholder.typicode.com/users/1")




// 🔧 Challenge 2: Replace a Todo Item
// Goal: Replace the entire to-do with ID 5. Set the title to "Study HTTP" and mark it as completed.
// Example URL: https://jsonplaceholder.typicode.com/todos/5
// Body:
// 
//   "userId": 1,
//   "id": 5,
//   "title": "Study HTTP",
//   "completed": true
// }
        // solution:
// const put = async (URL) =>{
//     let res;
//     try{
//          res = await fetch (URL, {
//             method: 'PUT',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 userId: 1,
//                 id: 5,
//                 title: "Study HTTP",
//                 completed: true
//             })
//         })
//         if(!res.ok){
//             console.error(`No response from server, please try again! ${res.status}`)
//             return;
//         }

//     }catch(error){
//         console.error (`Failed to update \n${error.message}`)
//         return
//     }
//     try{
//         const data = await res.json()
//         console.log(data)
//     }catch(error){
//         console.error (`Failed to parse response into json, ${error.message} \n${error.stack}`)
//     }
    
// }


// put("https://jsonplaceholder.typicode.com/todos/5")

// 🔧 Challenge 3: Create a Reusable put() Function
// Goal: Refactor your function so it accepts:
// put(url, updatedData)
// and use it to update any resource.
// Example usage:
// put('https://jsonplaceholder.typicode.com/posts/3', {
//   id: 3,
//   title: "Updated Post Title",
//   body: "New content here",
//   userId: 1
// });

// const put = async (URL, updatedData) =>{
//     let response
//     try{
//         response = await fetch(URL, {
//             method: 'PUT',
//             headers:{
//                 'Content-type': 'application/json'
//             }, 
//             body: JSON.stringify(updatedData)
//         })
//         if(!response.ok){
//             throw new Error (`Failed to contact server! ${response.status}`);
//         }
//     }catch(error){
//         console.error(`Post failed! ${error.message} \n Error Here: ${error.stack}`)
//         return;
//     }
//    try{
//     const data = await response.json()
//     console.log(data)

//    }catch(error){
//     console.error(`Failed to parse response into json. ${error.message} \n Error Here: ${error.stack}`)
//    }
// }




// 🔧 Challenge 4: Handle Status Feedback
// Goal: Modify your put() function to log different messages depending on response status:
// 200: ✅ Update successful
// 404: ❌ Resource not found
// 500: 🔥 Server error
// Use data.status to handle these.
    //solution:
// const put = async (URL) =>{
//     let res;
//     try{
//         res = await fetch(URL, {
//             method: 'PUT',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: 1,
//                 email: "test123@email.com"
//             })
//         }) 
//         switch(res.status){
//             case 200:
//                 console.log("Update successful!")
//                 break;
//             case 404:
//                 console.log("Resource not found!")
//                 break;
//             case 500:
//                 console.log("Server error!")
//                 break;
//             default:
//                 if(!res.ok){
//                     throw new Error (`Failed to reach server! ${res.status}`)
//                 }
//         }

//     }catch(error){
//         console.error(`Update failed! \n Error here: ${error.message}`)
//         return;
//     }

//     try{
//         const data = await res.json()
//         console.log(data)
//     }catch(error){
//         console.error(`Please try again! \n Error Here: ${error.stack} `)
//     }
// }
// put("https://jsonplaceholder.typicode.com/invalidpath/1")


// 🔧 Challenge 5: Update Multiple Users in a Loop
// Goal: Given an array of user objects, loop through them and send a PUT request to update each user’s name to "Updated Name".
// Example array:
const users = [
  { id: 1, name: "Old Name 1", email: "user1@example.com" },
  { id: 2, name: "Old Name 2", email: "user2@example.com" }
];
    const put = async(URL) =>{
       for(const user of users){
        try{
            const res = await fetch(URL, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                }, body: JSON.stringify({
                    id: user.id,
                    name: "Updated Name",
                    email: user.email
                })
            })
            
            switch(res.status){
                case 200:
                    console.log("Update Successful!")
                    break;
                case 404:
                    console.log("Resources not found")
                    break;
                case 500:
                    console.log("Server Error")
                    break;
                default:
                    if(!res.ok){
                        throw new Error(`Please try again! ${error.status}`)
                    }
            }

            const data = await res.json()
            console.log(data)
        }catch(error){
            console.error(`Update failed! ${error.message} \nError Here: ${error.stack}`)
            return;
        }     
    }
       }
      
    put("https://jsonplaceholder.typicode.com/users/1")

