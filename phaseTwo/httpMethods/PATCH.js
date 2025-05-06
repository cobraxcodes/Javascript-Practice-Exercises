// // // syntax

// // const patch = async (URL) =>{
// //     try{
// //         const res = await fetch (URL, {
// //             method: 'PATCH',
// //             headers:{
// //                 'Content-type' : 'application/json'
// //             },
// //             body: JSON.stringify({
// //                // send only what needs to be updated in the body and not the whole things
// //                email: "onlyChangeMe@email.com"
// //             })
// //         })
// //         if(!res.ok){
// //             throw new Error (`Unable to connect to server! ${res.status}`)
// //         }

// //         const data  = await res.json()
// //         console.log(data)

// //     }catch(error){
// //         console.error(`Unable to parse into json ${error.message} \nError here: ${error.stack}`)
// //     }
// // }
// // patch("URL HERE")



// 🛠️ PATCH Challenge 1: Update a User’s Email
// Goal: Send a PATCH request to update a user's email at endpoint:
// 📍 https://api.example.com/users/10
    const patch = async (URL) =>{
        let res;
        try{
            res = await fetch (URL, {
                method: 'PATCH',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: 'updatedEmail@email.com'
                })
            })
           switch(res.status){
            case 200:
                console.log(`Update successful`)
                break;
            case 404:
                console.log(`Resource Not Found!`)
                break;
            case 500:
                console.log(`Server Error!`)
                break;
            default: 
                if(!res.ok){
                    throw new Error (`Please try again! ${res.status}`)
                }
           }

           const data = await res.json()
           console.log(data)

        }catch(error){
            console.error(`Error here ${error.stack}`)
            return
        }
    }
patch("https://api.example.com/users/10")



// 🛠️ PATCH Challenge 2: Change a Product’s Price
// Goal: Update only the price of a product with ID 3 at:
// 📍 https://api.example.com/products/3

// 🛠️ PATCH Challenge 3: Toggle "isActive" Status
// Goal: Deactivate user #5 by setting their account to inactive.
// 📍 https://api.example.com/users/5

// 🛠️ PATCH Challenge 4: Fix a Misspelled Name
// Goal: Correct the name of customer #22.
// 📍 https://api.example.com/customers/22

// 🛠️ PATCH Challenge 5: Update a Blog Post Title
// Goal: Change only the title of a blog post (post ID #12), leaving all other fields untouched.
// 📍 https://api.example.com/posts/12

