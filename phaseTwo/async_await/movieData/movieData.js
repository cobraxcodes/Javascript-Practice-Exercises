// API: The Movie Database (TMDB) API
// Endpoint Example: https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

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


//create a input box (search box) and a button
// create an event listener for the button and define input value inside
// create an async fetch inside event listener
// make sure to show data.status if there is a problem with the network
// create a div to host title, release data, overview, and image (if available)
// make sure to create an if statement in catch if there is no movie available
// create a fallback data in catch block
// MAYBE create a sort function for the release date?? 