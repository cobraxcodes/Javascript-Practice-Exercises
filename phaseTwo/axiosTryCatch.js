//importing axios
import axiosInstance from "./axiosInstance.js"
import axios from "./axiosInstance.js"

// axios try/catch GET syntax
// const axios = require('axios');

// async function getUser() {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching user:', error.message);
//   }
// }

// getUser();



// // 🟢 Challenge 1: Make a GET Request
// // Use the jsonplaceholder API to fetch posts.
// // // GET https://jsonplaceholder.typicode.com/posts
// // ✅ Task:
// // Fetch posts
// // Log only the title of the first 5 posts

    // solution


const getUser = async(URL) =>{
  try{
    const res = await axios.get(URL) 
    res.data.slice(0,5).forEach(titles => console.log(titles.title))
  }catch(error){
    console.error(`Unable to fetch posts. ${error.message} \n Stack Trace: ${error.stack}`)
  }
}

// getUser("https://jsonplaceholder.typicode.com/posts")



// // 🟢 Challenge 2: Make a POST Request
// // Send a new post to the same API.
// // // POST https://jsonplaceholder.typicode.com/posts
// // ✅ Task:
// // Send a post with:
// // {
// //   "title": "Axios Challenge",
// //   "body": "This is my first POST request!",
// //   "userId": 1
// // }
// // Log the id and response status

  // SOLUTION
const postRequest = async (URL) =>{
  try{
    const res = await axios.post(URL, {
      method: 'POST',
      Headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
       "title": "Axios Challenge",
        "body": "This is my first POST request!",
        "userId": 1
      })
    })
    switch(res.status){
      case 200:
        console.log(`Post successful!`)
      case 500:
        console.log(`Unable to reach server ${error.response}`)
        break;
      case 404:
        console.log(`Unable to fetch resources ${error.response}`)
        break;
      default:
        if(!res.ok){
          console.log(`${res.status}`)
        }

      console.log(`id: ${res.data.id}`)
     
    }
  }catch(error){
    console.error(`Unable to send post ${error.message} \nStack Trace: ${error.stack}`)
  }
}

// postRequest("https://jsonplaceholder.typicode.com/posts")




// // 🟢 Challenge 3: Handle an Error Gracefully
// // Try to GET from a broken endpoint like:
// // // GET https://jsonplaceholder.typicode.com/invalidurl
// // ✅ Task:
// // Catch the error using try...catch or .catch()
// // Log the HTTP status and a custom error message

const getRequest = async (URL) =>{
  try{
    const res = await axios.get(URL, {
      headers:{
        'Content-type': 'application/json'
      }
        })
    console.log(res.data)
  }catch(error){
    switch(error.status){
      case 200:
        console.log(`Fetch successful`)
        break;
      case 500:
        console.log(`Network Error! ${error.status}`)
        break;
      case 404:
         console.log(`Resource unavailable ${error.status}`)
         break;
      default:
        if(error.status){
          console.log(`Error please try! ${error.message}`)
        }
    }
    console.error(`Unable to retrieve url, ${error.message} \nStack Trace: ${error.stack}`)
  }
}
// getRequest("https://jsonplaceholder.typicode.com/invalidURl")



// // 🚀 Axios Challenge Set #2 – Intermediate
// // 🔵 Challenge 4: Use Query Parameters
// // Fetch only posts from user with userId=3.
// // // GET https://jsonplaceholder.typicode.com/posts?userId=3
// // ✅ Task:
// // Fetch the posts
// // Log all the post titles from that user
const params = async (url, userId) =>{
  try{
    const res = await axios.get(url,{
      params: {userId}
    })
    res.data.forEach(post => console.log(`POST TITLES: ${post.title}`))
  }catch(error){
    console.error(`Unable to fetch post ${error.message} \nStack Trace: ${error.stack}`)
  }
}
// params("https://jsonplaceholder.typicode.com/posts", 3)





// // 🔵 Challenge 5: Custom Headers
// // Make a POST request with custom headers.
// // ✅ Task:
// // Send a POST to /posts
// // Use a custom header:
// // 'x-my-token': 'abc123'
// // Log the full response

const customHeader = async(url) =>{
  try{
    const res = await axios.post(url,{}, {
      headers:{
       'x-my-token': 'abc123'
      }
    })

    console.log(res.data)

  }catch(error){
    console.error(`Unable to fetch post, ${error.message} \nStack Trace:${error.stack}`)
  }
}

// customHeader()

// // 🔵 Challenge 6: Axios Instance + Base URL
// // Create an axiosInstance with a base URL and use it to get /comments.
// // ✅ Task:
// // Set up an Axios instance with base URL: https://jsonplaceholder.typicode.com
// // Fetch /comments
// // Log the email of the first 5 comments

const getComments = async () =>{
  try{
    const res = await axiosInstance.get('/comments')
   res.data.slice(0,5).forEach(emails => console.log(`Emails: ${emails.email}`))
  }catch(error){
    console.error(`unable to fetch comments ${error.message} \nStack Trace: ${error.stack}`)
  }
}

getComments()


// // 🔵 Challenge 7: Use Promise.all() to Fetch in Parallel
// // Fetch both /users and /posts at the same time.
// // ✅ Task:
// // Use Promise.all() with two Axios calls
// // Log how many users and posts were returned





// // 🔵 Challenge 8: Reusable getData() Function
// // Create a helper function to make GET requests to any endpoint.
// // ✅ Task:
// // Write getData(endpoint) that takes /posts or /users etc.
// // Use it to fetch:
// // /posts
// // /comments
// // Log total items from each call
