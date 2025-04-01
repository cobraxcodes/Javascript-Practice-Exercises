// Basic Syntax
// fetch(url)
// .then(result => result.json())
// .then(data => console.log(data))
// .catch(error => console.log("Failed to fetch data", error))

// Practice fetch using weather data
const apiKey = "450910114b3d429154fcf55987d32bd0"
const city = "Las Vegas"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
fetch(url)
.then(response => response.json())
.then(data => console.log("Weather data:" , data))
.catch(error => console.log("Failed to retrieve data", error))

// Challenge # 1
// Fetch GitHub User Data
// Use the GitHub API to fetch data about your profile.
// API URL: https://api.github.com/users/YOUR_GITHUB_USERNAME
// Extract and log your name, bio, and avatar URL.


// // Challenge #2 
// Fetch Random Dog Images 🐶
// Use https://dog.ceo/api/breeds/image/random
// Display the dog image in an <img> tag.

// // Challenge #3
// Fetch SpaceX Launch Data 🚀
// Use https://api.spacexdata.com/v4/launches/latest
// Log the mission name and launch date.