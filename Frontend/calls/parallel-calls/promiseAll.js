import axios from "../../axios/axiosInstance.js"

// 1. Challenge: Parallel Data Fetching
// You have three URLs for fetching JSON data, but you need to make sure they all resolve before proceeding. Use Promise.all() to fetch data from these URLs and log the results.
// const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
// const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
// const url3 = 'https://jsonplaceholder.typicode.com/posts/3';
// // Fetch all three posts using Promise.all
// // Log the results once all are resolved

    // SOLUTION
// const fetchFirst = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json())
// const fetchSecond = fetch ("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json())
// const fetchThird =  fetch("https://jsonplaceholder.typicode.com/posts/3").then(res => res.json())

    // SOLUTION
const fetch = async () =>{
    try{
        const [first,second,third ] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts/2"),
            axios.get("https://jsonplaceholder.typicode.com/posts/3")
        ])

        console.log(first.data, second.data, third.data)
        
    }catch(error){
        console.error(`Fetch invalid ${error.message} \n Stack Trace: ${error.stack}`)
    }
}

// fetch()



// 2. Challenge: Handling Rejections with Multiple Promises
// You are fetching multiple resources, but one of the URLs might fail. Write code that uses Promise.all() to fetch three URLs.
//  If any of them fail, catch the error and log it. Make sure to log whether the other promises have succeeded or not.
// const url1 = 'https://jsonplaceholder.typicode.com/posts/1'; // Valid
// const url2 = 'https://jsonplaceholder.typicode.com/posts/999'; // Invalid
// const url3 = 'https://jsonplaceholder.typicode.com/posts/3'; // Valid
// // Fetch all three posts using Promise.all
// // Catch and log any error
// // Make sure you log whether the other promises succeeded


        // SOLUTION
const parallel = async () =>{
    try{
        const [url1,url2,url3] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts/999"),
            axios.get("https://jsonplaceholder.typicode.com/posts/3")
        ]);
        console.log(url1.data,url2.data,url3.data)
    }catch(error){
        console.error(`Unable to fetch link ${error.message} \nStack Trace: ${error.stack}`)
    }
}

// parallel()


// 3. Challenge: Convert Multiple Promises into an Object
// You are fetching multiple user profiles, and each user has a unique ID. Fetch their data in parallel 
// and transform the results into an object with user IDs as keys and user data as values.
// const userIds = [1, 2, 3, 4, 5];
// // Fetch user profiles and map the results to an object where keys are user IDs
// // Example output should look like:
// // { 1: { ...userData }, 2: { ...userData }, 3: { ...userData }, 4: { ...userData }, 5: { ...userData } }

        //SOLUTION
const multiple = async () =>{
    try{
        const[user1, user2, user3] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/1"),
            axios.get("https://jsonplaceholder.typicode.com/posts/2"),
            axios.get("https://jsonplaceholder.typicode.com/posts/3")
        ])
       const myMap = new Map ([
        [user1.data.userId , user1.data],
        [user2.data.userId, user2.data],
        [user3.data.userId, user3.data]
       ])

       const obj = Object.fromEntries(myMap)
       console.log(obj)
    }catch(error){
        console.error(`Promise failed ${error.message} \nStack Trace: ${error.stack}`)
    }
}
// multiple()


// 4. Challenge: Track Multiple Download Tasks
// Imagine you have multiple file download tasks (represented as promises) that return their progress as values (like 50%, 75%, etc.). Use Promise.all() 
// to track the progress of all tasks and log the completion percentage.
// const download1 = new Promise((resolve, reject) => setTimeout(() => resolve('50%'), 2000));
// const download2 = new Promise((resolve, reject) => setTimeout(() => resolve('75%'), 3000));
// const download3 = new Promise((resolve, reject) => setTimeout(() => resolve('100%'), 4000));
// // Use Promise.all to track progress of the three downloads
// // Log the final download status once all are done

const download1 = new Promise((resolve) => setTimeout(() => resolve('50%'), 2000));
const download2 = new Promise((resolve) => setTimeout(() => resolve('75%'), 3000));
const download3 = new Promise((resolve) => setTimeout(() => resolve('100%'), 4000));

const complete = async() =>{
    try{
        const [x, y, z] = await Promise.all ([
           download1,download2,download3
        ])
        console.log(x,y,z)
    }catch(error){
        console.error(`An error has occured ${error.message} \nStack Trace: ${error.stack}`)
    }
}
// complete()





// 5. Challenge: Simulate Delayed Responses
// You are simulating a set of delayed responses (e.g., API requests). Create five promises that resolve after different delays (e.g., 1, 2, 3, 4, and 5 seconds). 
// Use Promise.all() to resolve them and log how long it took to get all responses.

        //SOLUTION
let startTime, endTime;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const promise1 = delay(1000).then(() => 'Response 1');
const promise2 = delay(2000).then(() => 'Response 2');
const promise3 = delay(3000).then(() => 'Response 3');
const promise4 = delay(4000).then(() => 'Response 4');
const promise5 = delay(5000).then(() => 'Response 5');
// // Use Promise.all to get all responses and log how long it took for all to resolve

const race = async() =>{
    startTime = performance.now()
    try{
        const [race1,race2,race3,race4,race5] = await Promise.all([
            promise1,promise2,promise3,promise4,promise5
        ])
        endTime = performance.now()
        let responseTime = endTime - startTime
        console.log(responseTime)
        console.log(race1,race2,race3,race4,race5)

    }catch(error){
        console.error(`An error has occured ${error.message} \nStack Trace:${error.stack}`)
    }
}

race()