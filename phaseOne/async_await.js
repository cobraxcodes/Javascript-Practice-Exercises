    // ASYNC SYNTAX EXAMPLE

    //CREATING PROMISE HERE 
    const fetchData = (url) =>{
        // creating a promise that will either return a fail or sucessful retrieval...
        // these params are wrapped inside because it is a function that will execute console.log
        return new Promise ((success, fail) =>{
            console.log("Fetching data now ... ")


            // setTimeout function that will execute after 2 seconds
        setTimeout(() =>{  
            let random = Math.random() > 0.5
            if(random){
                success("Data retrieved successfully...")
            }else{
                fail("Data failed to retrieve")
            }
        }, 2000)

        // create a getData function 
        // the async() will return the promise (the data that was gathered from fetchData())
        })  

    }

    const getData = async () =>{
        // stores the code results
    try{
        // wait for the fetchData function to get some data from "facebook.com"
        // and store the result in the variable result
        const result = await fetchData("facebook.com")
        console.log(result)
        // this will catch any errors and will log the error
        // basically replaces the 
        // (message) =>console.log(message), (error) =>console.log(error)
        // in the old callback
    }catch (error){
        console.log(error)
    }
    }
    // calling the function 
    getData()