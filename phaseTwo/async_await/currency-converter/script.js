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

// // Handling failed API requests or network issues.
// // Graceful handling of incorrect inputs from the user.

// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:

// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.


