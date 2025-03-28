// CHAINING SYNTAX

// const step1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1: Data fetched");
//             resolve("Data from Step 1");
//         }, 1000);
//     });
// };

// const step2 = (previousData) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Step 2: Processing ${previousData}`);
//             resolve("Data from Step 2");
//         }, 1000);
//     });
// };

// const step3 = (previousData) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Step 3: Finalizing with ${previousData}`);
//             resolve("Data from Step 3");
//         }, 1000);
//     });
// };

// // Chaining promises
// step1()
//     .then((result1) => step2(result1))
//     .then((result2) => step3(result2))
//     .then((finalResult) => console.log("Final Output:", finalResult))
//     .catch((error) => console.log("Error:", error));




// Exercise 1: Chaining Math Operations
// Create three functions:
// doubleNumber(num): Doubles a number after 1 second.
// squareNumber(num): Squares the number after 1 second.
// subtractFive(num): Subtracts 5 after 1 second.
// 👉 Chain these functions to:
// Start with 5.
// Double it → Square the result → Subtract 5.
// Log the final output.
const doubleNum = (num) =>{
    return new Promise ((resolve) =>{
        console.log(`Doubling ${num}`)
        setTimeout(()=>{
            let double = num * 2
            resolve(double)
        }, 1000)
    })
}

const squareNumber = (num) =>{
    return new Promise ((resolve)=>{
        console.log(`Squaring ${num} ...`)

        setTimeout(()=>{
            let squared = num * num
            resolve(squared)
        }, 1000)
    })
}

const subtractFive = (num) =>{
    return new Promise ((resolve) =>{
        console.log(`Subtracting 5 from ${num}`)

        setTimeout (()=>{
            let subtract = num - 5
            resolve(subtract)
        }, 1000)
    })
}

doubleNum(29)
    .then((result) => squareNumber(result)) 
    .then((result2) => subtractFive(result2))
    .then((finalResult)=> console.log(`Final Output: ${finalResult}`))
    .catch((error) => console.log(error))
// Exercise 2: Simulating an Order Processing System
// Create three functions that return Promises:
// placeOrder(order): Resolves in 2 seconds with "Order placed: <order>".
// processPayment(order): Resolves in 1.5 seconds with "Payment successful for: <order>".
// shipOrder(order): Resolves in 1 second with "Order shipped: <order>".
// 👉 Chain these functions to simulate the process for an order:
// Place an order for "Laptop".
// Process the payment.
// Ship the order.
// Log the final shipping confirmation.
const placeOrder = (str)=>{
    return new Promise ((resolve) =>{
        console.log(`Order Placed : ${str}`)

        setTimeout(()=>{
            resolve(str)
        }, 2000)
    })
}

const processPayment = (str) =>{
    return new Promise((resolve)=>{
        console.log(`Payment sucessful for: ${str}`)

        setTimeout(()=>{
            resolve(str)
        },1500)
    })
}

const shipOrder = (str) =>{
    return new Promise((resolve)=>{
        console.log(`Order shipped: ${str}`)

        setTimeout(()=>{
            resolve(str)
        }, 1000)
    })
}

placeOrder()
    .then((result1) => processPayment(result1))
    .then((result2) => shipOrder(result2))
    .catch((error)=> console.log(error))

// Exercise 3: Handling Errors in a Chain
// Modify Exercise 2, but now make processPayment() fail randomly 50% of the time (reject with "Payment failed").
// 👉 If it fails, catch the error and log: "Order failed: Payment could not be processed".
// const placeOrder = (str)=>{
//     return new Promise ((resolve) =>{
//         console.log(`Order Placed : ${str}`)

//         setTimeout(()=>{
//             resolve(str)
//         }, 2000)
//     })
// }

// const processPayment = (str) =>{
//     return new Promise((resolve, reject)=>{
//         console.log("Payment processing")

//         setTimeout(()=>{
//           let random = Math.random() > 0.5
//           if(random){
//           resolve(str)
//           }else{
//           reject(`Order failed: ${str} payment could not be processed`)
//           }
//         },1500)
//     })
// }

// const shipOrder = (str) =>{
//     return new Promise((resolve)=>{
//         console.log(`Order shipped: ${str}`)

//         setTimeout(()=>{
//             resolve(str)
//         }, 1000)
//     })
// }

// placeOrder("Laptop")
//     .then((result1) => processPayment(result1))
//     .then((result2) => shipOrder(result2))
//     .catch((error)=> console.log(error))

// Exercise 4: Simulating a User Login System
// Create three functions that return Promises:
// validateUser(username): Resolves in 1 second if the username is "admin", otherwise rejects with "Invalid user".
// fetchUserData(username): Resolves in 1.5 seconds with "User data for: <username>".
// showDashboard(data): Resolves in 1 second with "Welcome to the dashboard: <data>".
// 👉 Chain them to:
// Validate the username "admin".
// Fetch user data.
// Show the dashboard.
// Log the final message.
// Handle errors (e.g., if the username isn’t "admin", stop the chain).

// Exercise 4: Simulating a User Login System
// Create three functions that return Promises:
// validateUser(username): Resolves in 1 second if the username is "admin", 
/* otherwise rejects with "Invalid user". */
// fetchUserData(username): Resolves in 1.5 seconds with "User data for: <username>".
// showDashboard(data): Resolves in 1 second with "Welcome to the dashboard: <data>".
// 👉 Chain them to:
// Validate the username "admin".
// Fetch user data.
// Show the dashboard.
// Log the final message.
// Handle errors (e.g., if the username isn’t "admin", stop the chain).

const validateUser = (username) =>{
    return new Promise ((resolve, reject)=>{
      
      setTimeout(()=>{
      if(username.toLowerCase() === "admin"){
      resolve(`${username}`)
      }else{
      reject("Invalid user")
      }
      
      }, 1000)
    })
    }
    
    const fetchUserData = (username) =>{
    return new Promise ((resolve)=>{
        console.log(`User data for: ${username}`)
      
      setTimeout(()=>{
      resolve(username)
      }, 1500)
    })
    }
    
    const showDashboard = (data) =>{
    return new Promise ((resolve) =>{
        console.log(`Welcome to dashboard: ${data}`)
      
      setTimeout(()=>{
      resolve(data)
      }, 1000)
    })
    }
    
    validateUser("x")
    .then((result1) =>fetchUserData(result1))
    .then((result2) =>showDashboard(result2))
    /* .then((finalResult) =>console.log(finalResult)) */
    .catch((error)=>console.log(error))


// Exercise 5: Fetching Weather Data with Fake API
// Create three functions that return Promises:
// fetchCity(city): Resolves in 1 second with "Fetching weather for <city>".
// getTemperature(city): Resolves in 1.5 seconds with "Temperature in <city> is 25°C".
// suggestClothing(temp): Resolves in 1 second with "It's warm, wear light clothing".
// 👉 Chain them to:
// Start with "San Francisco".
// Fetch city data → Get temperature → Suggest clothing.
// Log the final clothing suggestion.
const fetchCity = (city) =>{
    return new Promise ((resolve)=>{
                    console.log(`Fetching weather for ${city}`)
           
           setTimeout(()=>{
           resolve(city)
           }, 1000)
    })
    }
    
    const getTemperature = (city) =>{
    return new Promise((resolve)=>{
            console.log(`The temperature in ${city} is 25 C`)
       
       setTimeout(()=>{
       resolve(city)
       }, 1500)
    })
    }
    
    const suggestClothing = (temp) =>{
    return new Promise ((resolve)=>{
                    console.log("It's warm, wear light clothing")
           
           setTimeout(()=>{
           resolve(temp)
           }, 1000)
    })
    }
    
    fetchCity("San Francisco")
    .then((result1)=> getTemperature(result1))
    .then((result2)=> suggestClothing(result2))
   /*  .then((finalResult)=>console.log(finalResult)) */

// Exercise 6: Movie Recommendation System
// Create functions that return Promises:
// getUserPreferences(userId): Resolves in 1 second with "User prefers Action movies".
// fetchRecommendedMovies(genre): Resolves in 1.5 seconds with "Recommended movies: Mad Max, John Wick".
// displayMovies(movies): Resolves in 1 second with "Here are your movies: <movies>".
// 👉 Chain them to:
// Get preferences for userId: 101.
// Fetch movie recommendations based on the user’s preference.
// Display the movies.

const getUserPreferences = (userId) =>{
    return new Promise ((resolve) =>{
        console.log(`User ${userId} prefers Action movies`)

        setTimeout(()=>{
            resolve("Action")
        }, 1000)
    })
}

const fetchRecommendedMovies = (genre) =>{
    return new Promise ((resolve)=>{
        console.log("Recommended movies: Mad Max, John Wick")

        setTimeout(()=>{
            resolve(["Aquaman", "John Wick", "Wonder Woman"])
        }, 1500)
    })
}

const displayMovies = (movies) =>{
    return new Promise ((resolve) =>{
        console.log(`Here are your favorite movies: ${movies}`)

        setTimeout(()=>{
            resolve(movies)
        }, 1000)
    })
}

getUserPreferences(101)
    .then((result1) => fetchRecommendedMovies(result1))
    .then((result2) => displayMovies(result2))
    /* .then((finalResult) => console.log(finalResult)) */
    .catch((errors) => console.log(errors))


// Exercise 7: Simulating an Online Quiz
// Create three functions that return Promises:
// startQuiz(): Resolves in 1 second with "Quiz started!".
// answerQuestion(): Resolves in 1.5 seconds with "Correct answer!" or 50% of the time fails with "Wrong answer!".
// showResults(): Resolves in 1 second with "You completed the quiz!".
// 👉 Chain them to:
// Start the quiz.
// Answer the question.
// Show results only if the answer is correct.
// If the answer is wrong, stop the chain and log "Try again!".

// Exercise 8: Chaining API Calls (Fake Data)
// Create three functions that return Promises:
// fetchUserID(username): Resolves in 1 second with "User ID for <username> is 456".
// fetchUserPosts(userID): Resolves in 1.5 seconds with "Posts by user <userID>: ['Post 1', 'Post 2']".
// displayPosts(posts): Resolves in 1 second with "Showing posts: <posts>".
// 👉 Chain them to:
// Start with "johndoe".
// Get the user ID → Fetch their posts → Display the posts.
// Handle errors (e.g., if the user isn’t found, stop the chain).


// Exercise 9: Simulating a Banking System
// Create three functions that return Promises:
// checkBalance(accountNumber): Resolves in 1 second with "Balance: $500", but 50% of the time fails with "Insufficient funds".
// withdrawAmount(amount): Resolves in 1.5 seconds with "Withdrew $100, remaining balance: $400".
// confirmTransaction(): Resolves in 1 second with "Transaction successful!".
// 👉 Chain them to:
// Check balance for account "123456".
// Withdraw $100.
// Confirm the transaction.
// If funds are insufficient, stop the chain and log "Transaction failed!".


// Exercise 10: Booking a Flight
// Create three functions that return Promises:
// searchFlights(from, to): Resolves in 1.5 seconds with "Flights found from <from> to <to>".
// selectFlight(flightId): Resolves in 1 second with "Flight <flightId> selected".
// confirmBooking(): Resolves in 1 second with "Booking confirmed!".
// 👉 Chain them to:
// Search for flights from "New York" to "Los Angeles".
// Select flight ID 9876.
// Confirm the booking.