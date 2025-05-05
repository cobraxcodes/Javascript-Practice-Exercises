// // SYNTAX
// // the same as post just different method and same body format - only change what needs to be updated

// const put = async (URL) =>{
//     try{
//         const data = await fetch (URL, {
//             method: 'PUT',
//             headers:{
//                 'Content-type': 'application/json'
//             },
//             // follow the same body and format. only change what needs to be updated
//             body: JSON.stringify({
//                 email: "test123@email.com",
//                 name: "Changed name",
//                 id: 1
//             })
//         })
//             if(!data.ok){
//                 throw new Error (`Update error! ${data.status}`)
//             }
//             const res = await data.json()
//             console.log(res)
//     }catch(error){
//         console.error(`Something went wrong ${error.message}
//             \n Error Here: ${error.stack}`)
//     }
// }