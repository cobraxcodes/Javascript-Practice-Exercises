// // Challenge 3: Fetch and Display GitHub Repositories
// // API: GitHub API
// // Endpoint Example: https://api.github.com/users/YOUR_USERNAME/repos

// // Requirements:
// // Fetch a list of repositories from a specific GitHub user.
        // enter a github user 
        // str literal for the url
// // Display the repository name, description, and a link to each repository.
    //create a div for each
// // Handle errors such as:
// // Invalid GitHub username (e.g., "User not found").
// // API request limits or server errors (e.g., "Rate limit exceeded").
        // look up if there any limits to fetching
// // Show a meaningful error message if the repositories cannot be fetched.
    // erorr.message

// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:

// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
    // error.status
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
    // error.status in try
    //error.message in catch
    // error.stack
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// goes in the catch block
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.



// create a button and add an event listener "click"
document.getElementById("searchBtn").addEventListener("click", ()=>{
    // inside the event listener define input value and fetch url with str literal 
    const input = document.getElementById("search").value

    // create async function
    const fetchData = async (URL) =>{
        try{
            const data = await fetch (URL)
            if(!data.ok){
                throw new Error (`Fetching failed, status: ${error.status}`)
            }
            const res = await data.json()
            console.log(res)
        }catch(error){
            console.error(`There has been error: ${error.message} ${error.stack}`)
        }
    }
    
})


// create a div for each repo (name, description, and link)
// call async function