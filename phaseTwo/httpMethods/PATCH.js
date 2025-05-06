// // syntax

// const patch = async (URL) =>{
//     try{
//         const res = await fetch (URL, {
//             method: 'PATCH',
//             headers:{
//                 'Content-type' : 'application/json'
//             },
//             body: JSON.stringify({
//                // send only what needs to be updated in the body and not the whole things
//                email: "onlyChangeMe@email.com"
//             })
//         })
//         if(!res.ok){
//             throw new Error (`Unable to connect to server! ${res.status}`)
//         }

//         const data  = await res.json()
//         console.log(data)

//     }catch(error){
//         console.error(`Unable to parse into json ${error.message} \nError here: ${error.stack}`)
//     }
// }
// patch("URL HERE")