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




// const fetchMultipleData = (url) =>{
//     return new Promise ((success, fail) =>{
//         console.log("Retrieving data ... ")

//         setTimeout (() =>{
//             let random = Math.random() > 0.5
//             if(random){
//                 success(`Successfully retrieved data from ${url}`)
//             }else{
//                 fail(`Failed to retrieve data from ${url}`)
//             }
//         }, 3000)

//     })
// }

//     const getMultipleData = async () =>{
//         try{
//             const result = await fetchMultipleData ("threads.com")
//             console.log(result)
//             const resultTwo = await fetchMultipleData ("linkedin.com")
//             console.log(resultTwo)
//         }catch (error){
//             console.log(error)
//         }
//     }


    
//     getMultipleData()

// Exercise 2: Fetch Data with a Timeout
// Sometimes network requests take too long.
// Modify fetchData so it fails automatically after 3 seconds if the data is not retrieved.

// Your Task:
// If fetchData() takes more than 3 seconds, it should automatically reject with "Request timed out".
// Use Promise.race() to compare:
// The original fetchData() request.
// A timeout promise that rejects after 3 seconds.



// const fetchDataRace = (url) =>{
//     return new Promise ((success, fail) =>{
//         console.log("Fetching data...")

//             // creates delay of 3 seconds
//         const time = Math.random() * 10000;

//         setTimeout(() =>{
//             let random = Math.random() > 0.5;
//             if(random){
//                 success(`Successfully retrieved data from ${url}`)
//             }else{
//                 fail(`Failed to retrieve data from ${url}`)
//             }
//         }, time)
//     })
// }

//         const getDataRace = async () =>{
//             try{
//                 // racing between these urls which one we're able to retrieve data from first
//                 const result = await Promise.race([
//                     fetchDataRace('instagram.com'),
//                     fetchDataRace('facebook.com'),
//                     fetchDataRace('reddit.com'),

//                     // times out the code if data has not been recieved within 3 seconds 
//                     new Promise((_, reject) => setTimeout(()=> reject("Request timed out"), 3000))
//                 ]) 
//                 // logs the fastest one
//                 console.log(result)}
//             catch(error){
//                 console.log(error)
//             }
//         }

//     getDataRace()


// Exercise #3: Delayed Data Fetch
// Create a function that fetches data from a URL and simulates a delay of 2-4 seconds. Once the data is "fetched", 
// log the message Data fetched successfully from {url}. If the data cannot be fetched within 4 seconds, log Request timed out.


//  const fetchDelayedData = (url) =>{
//     return new Promise((success, fail)=>{
//         console.log("Retrieving data ... ")

//         let timeDelayed = (Math.random() * 2000)+ 2000;

//             setTimeout(()=>{
//                 let random = Math.random() > 0.5
//                 if(random){
//                     success(`Data fetched successfuly from ${url}`)
//                 }else{
//                     fail(`Data fetched unsuccessfully from ${url}`)
//                 }
//             }, timeDelayed)
//     },)
//  }
//         const getDelayedData = async() =>{
//            try{
//             const result = await Promise.race([
//                 fetchDelayedData('reddit.com'),
//                 fetchDelayedData('facebook.com'),
//                 // make sure to add _, in promise because we're not dealing with the resolve part
//                 // only the reject if the promise times out 
//                 new Promise ((_, reject) =>setTimeout(()=>reject("Request timed out"), 4000))
//             ])
//             console.log(result)
//            }catch (error){
//             console.log(error)
//            }
//         }

// getDelayedData()

// Exercise #4: Fetch Data Sequentially with Error Handling
// Write a function that gets data from two URLs sequentially. If one fails,
//  it should skip to the next URL and log an error message. If both fail, it should log All requests failed.

const fetchSequentialData = (url) =>{
    return new Promise ((success, fail) =>{
        console.log("Retrieving data ... ")

        const timeSequential = (Math.random () * 2000) + 1000;

        setTimeout(()=>{
            let random = Math.random() > 0.5
            if(random){
                success(`Data fetched successfuly from ${url}`)
            }else{
                fail(`Data fetched unsuccessfully from ${url}`)
            }
        }, timeSequential)
    })
}

        // url parameters go here
        // there are 2 try/catch for each url
        // there are 2 promise.race to set timeout for each
    const getSequentialData = async(url1, url2) =>{
        // counts how requests has failed
        let failedRequest = 0
        let successfulRequest = 0
        try{
            const result1 = await Promise.race([
                fetchSequentialData(url1),
                new Promise((_, reject) =>setTimeout(() => reject('Request timed out ... '), 3000)),
            ])
            successfulRequest++
            console.log(result1)
        }catch(error1){
            console.log(error1)
            // adds to failed requests if code goes to catch
            failedRequest++
        }try{
            const result2 = await Promise.race([
                fetchSequentialData(url2),
                new Promise((_, reject) => setTimeout(()=> reject ('Request timed out ... '), 3000)),
            ])
            successfulRequest++
            console.log(result2)
        }catch(error2){
            console.log(error2)
            failedRequest++
            // checks for 2 failed requests to log
        }if(failedRequest === 2){
            console.log("All Requests Failed!")
        }else if (successfulRequest === 2){
            console.log("All Requests were successful!")
        }
    }   
getSequentialData("weather.com", "nbc.com")

// Exercise #5: Multiple Data Fetch with a Success Rate
// Write a function that fetches data from three URLs simultaneously (in parallel). If any one of them succeeds,
//  log At least one data fetched successfully. If all of them fail, log All requests failed.
    const fetchParallelData = (url) =>{
        return new Promise ((resolve, reject) =>{
            console.log("Parallel data being retrieved ...")

            let timeParallel = (Math.random()*2000) + 2000;

            setTimeout(()=>{
                let random = Math.random() > 0.5
                if(random){
                    resolve(`Data recieved from ${url}`)
                }else{
                    reject(`Data rejected by ${url}`)
                }
            }, timeParallel)
        })
    }
        const getParallelData = async() =>{
            let fetched = 0
            let failed = 0
            try{
                const result = await Promise.race([
                    fetchParallelData('reddit.com'),
                    fetchParallelData('facebook.com'),
                    fetchParallelData('instagram.com'),
                    new Promise((_, reject) => setTimeout(()=> reject('Request Timed Out!'), 3000))
                ])
                fetched++
                console.log(result)
            }catch(error){
                failed++
                console.log(error)
            }if(fetched > 1){
                console.log("At least one data fetched succcesfully")
            }else if(failed === 3){
                console.log("All requests failed")
            }
        }
    
        getParallelData()
// Exercise #6:  Simulate Multiple Retries
// Create a function that fetches data from a URL, but if it fails, retry up to 3 times before rejecting with a failure message. 
// You should use a delay of 2 seconds between each retry attempt.


// Exercise #7 :Promise Race with a Delay
// Simulate a race between three different promises that resolve with different time delays 
// (e.g., 1 second, 2 seconds, and 3 seconds). Log the result as soon as the first one resolves and indicate the time taken.