// // Challenge 5: Fetch and Display Quotes from an API
// // API: Quotes API
// // Endpoint Example: https://quote-garden.herokuapp.com/api/v3/quotes?page=1

// // Requirements:

// // Fetch a list of quotes and display the quote text along with the author.
// // Dynamically render the quotes on the page, one per line.
// // Handle errors such as:
// // Invalid or non-existent API endpoints (e.g., 404 Not Found).
// // Empty responses (e.g., no quotes available).
// // Show an error message or a "retry" button if the quotes cannot be fetched.

// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:

// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.
