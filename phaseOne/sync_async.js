// Objective #1: Create a function that simulates fetching data from an API. The API call should randomly succeed or fail. 
// The function should take both success and failure callbacks.
// Requirements:
// Use Math.random() to simulate the success or failure of the API call.
// If successful, call the success callback with a message like "✅ API call successful!".
// If it fails, call the failure callback with an error message like "❌ API call failed!".
// Hint: Use setTimeout to simulate a delay like a real API call.


const simulate = (sucessCallback , failureCallback) => {
    // create notice that a function has started
    console.log("feching API data");
    // simulates the delay that happens when actually calling an API
        setTimeout(() =>{
            // create probability
            let success = Math.random() > 0.5;
            // if let success is true then this will be the output logged in the console.
            if(success) {
              sucessCallback("API data retrieve successful")
              // if false then this will show instead
            }else{
              failureCallback("Error, failure on retrieving API data")
            }
            // this is how long setTimeOut will delay or wait until executing the code inside it
        }, 2000)
}
// calling the function here
simulate(
    // This will show the success message
    (message)=>console.log(message),
    // this will show failure message
(error) => console.log(error)
);
// Exercise 2: Retry Logic with Success/Failure Callbacks
// Objective: Modify the above exercise to add a retry mechanism. If the API call fails, we should attempt the call again up to 3 times.
// Requirements:
// The function should attempt up to 3 retries.
// If the call succeeds at any point, the success callback should be invoked.
// If it fails after 3 attempts, call the failure callback with an error message.




// Exercise 3: Delay Function with Callback
// Objective: Create a delay function that takes a number of milliseconds as input and then calls a provided callback after the delay. 
// This is useful for simulating async operations.
// Requirements:
// The function should take two parameters: a delay time (in milliseconds) and a callback function.
// Use setTimeout to delay the callback.
// Call the callback function after the delay is over.




// Exercise 4: Processing an Array of Items with Callback
// Objective: Create a function processItems that accepts an array of items and processes each item asynchronously. For each item:
// Log the item using the success callback.
// If an item has a value of null, invoke the failure callback.
// Requirements:
// Iterate over an array of items.
// For each item:
// If the item is null, call the failure callback with the message "❌ Item is invalid!".
// Otherwise, call the success callback and log the item.




// Exercise 5: Asynchronous File Download Simulation
// Objective: Simulate downloading files asynchronously using callback functions. The function should take a file name and a callback to handle the "downloaded" file.
// Requirements:
// Use setTimeout to simulate the download process.
// After 3 seconds, invoke the callback with the file name as a success message.




// Exercise 6: Handle Multiple Success and Failure Callbacks
// Objective: Create a function that handles multiple success and failure callbacks. 
// The function should process each item in an array of tasks and pass either a success or failure message to the corresponding callback.
// Requirements:
// Pass two sets of callbacks:
// Success callbacks: If the task is completed, call the success callback.
// Failure callbacks: If the task is not completed, call the failure callback.