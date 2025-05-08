// 1. Challenge: Parallel Data Fetching
// You have three URLs for fetching JSON data, but you need to make sure they all resolve before proceeding. Use Promise.all() to fetch data from these URLs and log the results.
// const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
// const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
// const url3 = 'https://jsonplaceholder.typicode.com/posts/3';
// // Fetch all three posts using Promise.all
// // Log the results once all are resolved





// 2. Challenge: Handling Rejections with Multiple Promises
// You are fetching multiple resources, but one of the URLs might fail. Write code that uses Promise.all() to fetch three URLs. If any of them fail, catch the error and log it. Make sure to log whether the other promises have succeeded or not.
// const url1 = 'https://jsonplaceholder.typicode.com/posts/1'; // Valid
// const url2 = 'https://jsonplaceholder.typicode.com/posts/999'; // Invalid
// const url3 = 'https://jsonplaceholder.typicode.com/posts/3'; // Valid
// // Fetch all three posts using Promise.all
// // Catch and log any error
// // Make sure you log whether the other promises succeeded





// 3. Challenge: Convert Multiple Promises into an Object
// You are fetching multiple user profiles, and each user has a unique ID. Fetch their data in parallel and transform the results into an object with user IDs as keys and user data as values.
// const userIds = [1, 2, 3, 4, 5];
// // Fetch user profiles and map the results to an object where keys are user IDs
// // Example output should look like:
// // { 1: { ...userData }, 2: { ...userData }, 3: { ...userData }, 4: { ...userData }, 5: { ...userData } }





// 4. Challenge: Track Multiple Download Tasks
// Imagine you have multiple file download tasks (represented as promises) that return their progress as values (like 50%, 75%, etc.). Use Promise.all() to track the progress of all tasks and log the completion percentage.
// const download1 = new Promise((resolve, reject) => setTimeout(() => resolve('50%'), 2000));
// const download2 = new Promise((resolve, reject) => setTimeout(() => resolve('75%'), 3000));
// const download3 = new Promise((resolve, reject) => setTimeout(() => resolve('100%'), 4000));
// // Use Promise.all to track progress of the three downloads
// // Log the final download status once all are done





// 5. Challenge: Simulate Delayed Responses
// You are simulating a set of delayed responses (e.g., API requests). Create five promises that resolve after different delays (e.g., 1, 2, 3, 4, and 5 seconds). Use Promise.all() to resolve them and log how long it took to get all responses.
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const promise1 = delay(1000).then(() => 'Response 1');
// const promise2 = delay(2000).then(() => 'Response 2');
// const promise3 = delay(3000).then(() => 'Response 3');
// const promise4 = delay(4000).then(() => 'Response 4');
// const promise5 = delay(5000).then(() => 'Response 5');
// // Use Promise.all to get all responses and log how long it took for all to resolve





// 6. Challenge: Combine Promises and Handling Timeouts
// You have a function that fetches data from multiple sources, but if any of the requests take longer than 3 seconds, they should be aborted. Use Promise.all() with a timeout mechanism.
// const timeout = ms => new Promise((_, reject) => setTimeout(() => reject('Timeout!'), ms));
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     // Simulate data fetching with a random timeout
//     setTimeout(() => resolve(`Fetched data from ${url}`), Math.random() * 5000);
//   });
// };
// const urls = ['url1', 'url2', 'url3'];
// // Create a timeout-based function that fetches data but rejects if it takes longer than 3 seconds
// // Use Promise.all to handle the multiple fetch requests and timeouts together