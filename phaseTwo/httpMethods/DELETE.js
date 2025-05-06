// // // // syntax
// // // const del = async(URL) =>{
// // //     try{
// // //         const res = await fetch(URL,{
// // //             method: 'DELETE'
// // //         })
// // //         if(!res.ok){
// // //             throw new Error (`Server unreachable ${res.status}`)
// // //         }
// // //         console.log(`Item successfully deleted`)
// // //     }catch(error){
// // //         console.error(`Unable to delete, ${error.message} \n Stack Trace: ${error.stack}`)
// // //     }
// // // }
// // // del('URL OF THE SPECIFIC INFO I AM TRYING TO DELETE')

// // 🗑️ Challenge 1: Delete a User
// // You need to delete a user with ID 7.
// // 📍 Endpoint:
// // https://api.example.com/users/7

// const del = async (URL) =>{
//     try{
//         const res = await fetch(URL, {
//             method: 'DELETE'
//         })
//         if(!res.ok){
//             throw new Error(`Unable to reach server! ${res.status}`)
//         }
//     }catch(error){
//         console.error(`Delete failed! ${error.message} \n Stack Trace: ${error.stack}`)
//     }
// }
// del("https://api.example.com/users/7")

// // 🗑️ Challenge 2: Remove a Product
// // A product with ID 42 needs to be removed from inventory.
// // 📍 Endpoint:
// // https://api.example.com/products/42
// const del = async (URL) =>{
//     try{
//         const res = await fetch(URL, {
//             method: 'DELETE'
//         })
//         if(!res.ok){
//             throw new Error(`Unable to reach server! ${res.status}`)
//         }
//     }catch(error){
//         console.error(`Delete failed! ${error.message} \n Stack Trace: ${error.stack}`)
//     }
// }
// del("https://api.example.com/products/42")



// // 🗑️ Challenge 3: Delete a Comment
// // Someone reported a comment on a blog post. The comment ID is 99.
// // 📍 Endpoint:
// // https://api.example.com/comments/99
// const del = async (URL) =>{
//     try{
//         const res = await fetch(URL, {
//             method: 'DELETE'
//         })
//         if(!res.ok){
//             throw new Error(`Unable to reach server! ${res.status}`)
//         }
//     }catch(error){
//         console.error(`Delete failed! ${error.message} \n Stack Trace: ${error.stack}`)
//     }
// }
// del("https://api.example.com/comments/99")


// // 🗑️ Challenge 4: Clear a Task
// // A task in a to-do list app is done. Task ID 23 should be removed.
// // 📍 Endpoint:
// // https://api.example.com/tasks/23
// const del = async (URL) =>{
//     try{
//         const res = await fetch(URL, {
//             method: 'DELETE'
//         })
//         if(!res.ok){
//             throw new Error(`Unable to reach server! ${res.status}`)
//         }
//     }catch(error){
//         console.error(`Delete failed! ${error.message} \n Stack Trace: ${error.stack}`)
//     }
// }
// del("https://api.example.com/tasks/23")

// // 🗑️ Challenge 5: Remove a Like from a Post
// // A user unliked a post. You need to delete the like (ID: 159).
// // 📍 Endpoint:
// // https://api.example.com/likes/159
// const del = async (URL) =>{
//     try{
//         const res = await fetch(URL, {
//             method: 'DELETE'
//         })
//         if(!res.ok){
//             throw new Error(`Unable to reach server! ${res.status}`)
//         }
//     }catch(error){
//         console.error(`Delete failed! ${error.message} \n Stack Trace: ${error.stack}`)
//     }
// }
// del("https://api.example.com/likes/159")
