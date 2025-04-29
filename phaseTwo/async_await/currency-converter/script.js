// // Objective: Fetch live exchange rates using an API to convert currencies.
// // Requirements:
// // Use async/await to fetch the latest exchange rates from a currency conversion API.
// // Display the exchange rate between two selected currencies.
// // Allow the user to input an amount and see the converted result.

// // Error handling:
// // Catch any network errors or API failures and show a message like "Unable to fetch exchange rates. Please try again later."
// // Display an error message if invalid currencies are entered (e.g., "Currency not found").
// // Handle potential errors in user input (e.g., non-numeric values).
// // Show a loading message/spinner while waiting for the API response.
// // Error Handling Focus:


// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:
// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.



   // add event listener original currency and store change in variable
   document.getElementById('originalCurrency').addEventListener("input", ()=>{
    // storing new value if changed in originalCurrencyChange variable
    let originalCurrencyChange = document.getElementById("originalCurrency").value
    console.log(originalCurrencyChange)
})

      
    // get foreign option - set option value2 into foreignInput
    document.getElementById("foreignCurrency").addEventListener("input", ()=>{
        // storing new value (if changed) in foreignCurrencyChange variable
        let foreignCurrencyChange = document.getElementById("foreignCurrency").value
        console.log(foreignCurrencyChange)
    })

   // get amount from input box
   document.getElementById('amount').addEventListener("input", ()=>{
    let inputAmount = document.getElementById('amount').value
    console.log(inputAmount)
   })
    

   // storing date into a variable for fetching
   const date = new Date().toISOString().split('T')[0];
   console.log(date)


const fetchData = async (URL) =>{
      try{
    const data = await fetch(URL)
    // error message if fetching doesn't work
    if(!data.ok){
        throw new Error (`fetch failed, Status:${data.status}`)
    }
    const res = await data.json()
  }catch(error){
    console.error(`Error ${error.message}`)
  }
}
  fetchData(`https://api.fxratesapi.com/convert?from=USD&to=PHP&date=2025-04-27&amount=1&format=json`);



