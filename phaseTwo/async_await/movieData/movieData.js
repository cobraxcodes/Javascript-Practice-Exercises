// // Challenge 3: Fetch and Display GitHub Repositories
// // API: GitHub API
// // Endpoint Example: https://api.github.com/users/YOUR_USERNAME/repos

// // Requirements:

// // Fetch a list of repositories from a specific GitHub user.
// // Display the repository name, description, and a link to each repository.
// // Handle errors such as:
// // Invalid GitHub username (e.g., "User not found").
// // API request limits or server errors (e.g., "Rate limit exceeded").
// // Show a meaningful error message if the repositories cannot be fetched.


// General Error Handling Guidelines:
// For all challenges, make sure to follow these error-handling best practices:

// Try-Catch: Use try...catch blocks to handle any errors that may arise during the fetch request.
// Error Messages: Provide clear, user-friendly error messages that describe what went wrong.
// Fallback Data: If the data is not available, consider displaying fallback information, such as a message like "We couldn't fetch the data at the moment, please try again later."
// Network Errors: Handle network errors gracefully (e.g., the user is offline, or the server is down).
// Loading States: Consider adding a loading spinner or message while the data is being fetched asynchronously.
