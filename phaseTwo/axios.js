// // basic set up for importing axios
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;


// // 🟢 Challenge 1: Make a GET Request
// // Use the jsonplaceholder API to fetch posts.
// // // GET https://jsonplaceholder.typicode.com/posts
// // ✅ Task:

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(response =>{
    console.log(response.data)
})
.catch(error =>{
    console.error(`Error: ${error.message}`)
}) 
// // Fetch posts
// // Log only the title of the first 5 posts
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
// // 🟢 Challenge 3: Handle an Error Gracefully

// // Try to GET from a broken endpoint like:

// // // GET https://jsonplaceholder.typicode.com/invalidurl
// // ✅ Task:

// // Catch the error using try...catch or .catch()
// // Log the HTTP status and a custom error message

// // 🚀 Axios Challenge Set #2 – Intermediate
// // 🔵 Challenge 4: Use Query Parameters

// // Fetch only posts from user with userId=3.

// // // GET https://jsonplaceholder.typicode.com/posts?userId=3
// // ✅ Task:

// // Fetch the posts
// // Log all the post titles from that user
// // 🔵 Challenge 5: Custom Headers

// // Make a POST request with custom headers.

// // ✅ Task:

// // Send a POST to /posts
// // Use a custom header:
// // 'x-my-token': 'abc123'
// // Log the full response
// // 🔵 Challenge 6: Axios Instance + Base URL

// // Create an axiosInstance with a base URL and use it to get /comments.

// // ✅ Task:

// // Set up an Axios instance with base URL: https://jsonplaceholder.typicode.com
// // Fetch /comments
// // Log the email of the first 5 comments
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
