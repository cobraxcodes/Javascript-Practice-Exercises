// API: The Movie Database (TMDB) API
// Endpoint Example: https://api.themoviedb.org/3/movie/popular?api_key=c013d3c1e7d458f2f459af92d68378db 

// Requirements:

// Fetch popular movies from TMDB and display the movie title, release date, and overview.
// Dynamically render the movie data into a list or grid on the page.
// Handle errors such as:
// Invalid API key or expired token.
// API rate limiting.
// Missing or incomplete movie data.
// Display an appropriate message (e.g., "No movies found or something went wrong.").

// // General Error Handling Guidelines:
// // For all challenges, make sure to follow these error-handling best practices:
// // Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// // Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// // Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// // Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// // Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.


// create an event listener for the button and define input value inside
document.getElementById('searchBtn').addEventListener('click', ()=>{
    const input = document.getElementById('search').value.toLowerCase()
    const container = document.getElementById('moviesContainer')
// create an async fetch inside event listener
    const fetchData = async (URL) =>{
        try{
            const data = await fetch(URL)
            if(!data.ok){
                // make sure to show data.status if there is a problem with the network
                throw new Error (`fetch failed. Status: ${data.status}`)
            }
            const res = await data.json()
            container.innerHTML = '';
            const results = res.results.filter(movie => movie.title.toLowerCase().includes(input))
                results.forEach(movie => {
                    // create a div to host title, release date and image (if available)
                    // movie div
                    const movieDiv = document.createElement('div')
                    movieDiv.id = "movieDiv"
                    container.appendChild(movieDiv)
        
                    //title
                    const title = document.createElement('h3')
                    title.textContent= movie.title
                    movieDiv.appendChild(title)
        
                    //release date
                    const releaseDate = document.createElement('h4')
                    releaseDate.textContent = movie.release_date
                    movieDiv.appendChild(releaseDate)
                    
                    })
        }catch(error){
            console.error(`Syntax error: ${error.message} ${error.stack}`)
               const noMovie = document.createElement('p')
               noMovie.textContent = "No Movie Available"
               container.appendChild(noMovie)
            
        }
    }
    fetchData("https://api.themoviedb.org/3/movie/popular?api_key=c013d3c1e7d458f2f459af92d68378db ")
})


// make sure to create an if statement in catch if there is no movie available
// create a fallback data in catch block
// MAYBE create a sort function for the release date?? 