// // Objective: Use the Random User API to fetch random user data and display it in a user-friendly format.

// // Requirements:
// // Use async/await to fetch random user data from the Random User API (https://randomuser.me/api/).
// // Display the user's name, email, address, phone number, and profile picture.
// // Show a loading message while the data is being fetched.
// // Implement error handling:
// // Catch errors if the API request fails (e.g., network issues).
// // Display a message like "Could not fetch user data. Please try again later."
// // Handle invalid responses (e.g., empty data or missing properties).
// // Add a retry button in case of a failed request, so the user can try fetching the data again.
// // Error Handling Focus:

// // Handling network or server failures with proper fallback messages.
// // Graceful error recovery with retry mechanisms.

// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:

// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.
