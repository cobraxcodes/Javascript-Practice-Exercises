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

    
    // create an event listener for a button
    document.getElementById("convertBtn").addEventListener('click', ()=>{
         
    // declare values for the selects
        let originalCurrency = document.getElementById("originalCurrency").value
        let foreignCurrency = document.getElementById("foreignCurrency").value
  // and input box 
        let inputAmount = document.getElementById("amount").value
        // date
        let date = new Date().toISOString().split('T')[0]

        // fetching data here
         const fetchData = async (URL) =>{
          try{
            const data = await fetch (URL)
            if(!data.ok){
                throw new Error (data.status)
            }
            const res = await data.json()
        
            let result = document.getElementById('resultDiv')
            if(result){
                result.innerHTML = ''
            }else{
                //creating div here
                result = document.createElement('div')
                result.id = 'resultDiv'
                result.className = 'currencyDiv'
                container.appendChild(result)
             }
           

            // creating result here
            const resultDoc = document.createElement('p')
            resultDoc.id = 'resultDoc'
            resultDoc.textContent = res.result
            resultDiv.appendChild(resultDoc)
            
        
          }catch(error){
            console.error("Error", error)
          }
         }
         fetchData(`https://api.fxratesapi.com/convert?from=${originalCurrency}&to=${foreignCurrency}&date=${date}&amount=${inputAmount}&format=json`)

    })
