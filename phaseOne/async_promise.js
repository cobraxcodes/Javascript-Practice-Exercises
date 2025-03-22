    // // ASYNC SYNTAX EXAMPLE

    //CREATING PROMISE HERE 
    // const fetchData = (url) =>{
    //     // creating a promise that will either return a fail or sucessful retrieval...
    //     // these params are wrapped inside because it is a function that will execute console.log
    //     return new Promise ((success, fail) =>{
    //         console.log("Fetching data now ... ")


    //         // setTimeout function that will execute after 2 seconds
    //     setTimeout(() =>{  
    //         let random = Math.random() > 0.5
    //         if(random){
    //             success("Data retrieved successfully...")
    //         }else{
    //             fail("Data failed to retrieve")
    //         }
    //     }, 2000)

    //     // create a getData function 
    //     // the async() will return the promise (the data that was gathered from fetchData())
    //     })  

    // }

    // // const getData = async () =>{
    //     // stores the code results
    // try{
    //     // wait for the fetchData function to get some data from "facebook.com"
    //     // and store the result in the variable result
    //     const result = await fetchData("facebook.com")
    //     console.log(result)
    //     // this will catch any errors and will log the error
    //     // basically replaces the 
    //     // (message) =>console.log(message), (error) =>console.log(error)
    //     // in the old callback
    // }catch (error){
    //     console.log(error)
    // }
    // }
    // // calling the function 
    // getData()


    // NOW TO REWRITE IT 
// WITHOUT PEEKING THIS TIME

// const fetchData = (url) =>{
//     return new Promise ((success, fail) =>{
//         console.log("Retrieving data ...");

//         setTimeout (() =>{
//                 let random = Math.random() > 0.5
//             if(random){
//                 success("Data retrieved successfully")
//             }else{
//                 fail("Data failed to retrieve")
//             }
//         }, 2000)
//     })
// }

//         const getData = async () => {
//             try{
//                 let result = await  fetchData("instagram.com")
//                 console.log(result)
//             }catch(error){
//                 console.log(error)
//             }
//         }

// getData()



// Exercise 1: Fetch Multiple Data Requests
// Modify fetchData so it can fetch multiple URLs in sequence.
// Write an async function that fetches two URLs one after the other.
// Your Task:
// Modify fetchData(url) to accept any URL.
// Write getMultipleData():
// Fetch "threads.com" first.
// Wait for it to finish.
// Then fetch "linkedin.com".
// Log results properly.

const fetchMultipleData = (url) =>{
    return new Promise ((success, fail) =>{
        console.log("Retrieving data ... ")

        setTimeout (() =>{
            let random = Math.random() > 0.5
            if(random){
                success(`Successfully retrieved data from ${url}`)
            }else{
                fail(`Failed to retrieve data from ${url}`)
            }
        }, 3000)

    })
}

    const getMultipleData = async () =>{
        try{
            const result = await fetchMultipleData ("threads.com")
            console.log(result)
            const resultTwo = await fetchMultipleData ("linkedin.com")
            console.log(resultTwo)
        }catch (error){
            console.log(error)
        }
    }


    
    getMultipleData()

// Exercise 2: Fetch Data with a Timeout
// Sometimes network requests take too long.
// Modify fetchData so it fails automatically after 3 seconds if the data is not retrieved.

// Your Task:
// If fetchData() takes more than 3 seconds, it should automatically reject with "Request timed out".
// Use Promise.race() to compare:
// The original fetchData() request.
// A timeout promise that rejects after 3 seconds.