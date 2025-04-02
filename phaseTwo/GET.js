// // Basic Syntax
// // fetch(url)
// // .then(result => result.json())
// // .then(data => console.log(data))
// // .catch(error => console.log("Failed to fetch data", error))

// // Practice fetch using weather data
// // const apiKey = "450910114b3d429154fcf55987d32bd0"
// // const city = "Las Vegas"
// // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
// // fetch(url)
// // .then(response => response.json())
// // .then(data => console.log("Weather data:" , data))
// // .catch(error => console.log("Failed to retrieve data", error))

// // Challenge # 1
// // Fetch GitHub User Data
// // Use the GitHub API to fetch data about your profile.
// // API URL: https://api.github.com/users/YOUR_GITHUB_USERNAME
// // Extract and log your name, bio, and avatar URL.

// // fetch("https://api.github.com/users/cobraxcodes")
// // .then(result => result.json())
// // .then((data)=>{
// //     console.log("Username:" ,  data.name)
// //     console.log("Bio:" , data.bio)
// //     console.log("Avatar:" , data.avatar_url)
// // })
// // .catch(error => console.log(error))

// // // Challenge #2 
// // Fetch Random Dog Images 🐶
// // Use https://dog.ceo/api/breeds/image/random

// // fetch("https://dog.ceo/api/breeds/image/random")
// // .then(result => result.json())
// // .then((data =>{
// //     console.log("Image:", data.message)
// // }))
// // .catch(error => console.log(error))



// // // Challenge #3
// // Fetch SpaceX Launch Data 🚀
// // Use https://api.spacexdata.com/v4/launches/latest
// // Log the mission name and launch date.

// // fetch("https://api.spacexdata.com/v4/launches/latest")
// // .then(result => result.json())
// // .then(data => console.log(data))
// // // .then((data =>{
// // //     console.log("Flight Name:", data.name)
// // //     console.log("Launch Date:", data.date_utc)
// // //     console.log("Flight Number:", data.flight_number)
// // // }))
// // .catch(error => console.log(error))

// // Challenge #4
// // 1️⃣ Fetch Random Cat Facts 🐱
// // Use the Cat Facts API to fetch and log a random cat fact.
// // API URL: https://catfact.ninja/fact
// // Task: Log the fact from the response.

// // fetch("https://catfact.ninja/fact")
// // .then(result => result.json())
// // .then(data => console.log(data.fact))
// // .catch(error => console.log(`Error occured:${error}`))


// // Challenge #5
// // 3️⃣ Fetch Pokemon Data ⚡
// // Use the PokéAPI to fetch data for a specific Pokémon (e.g., Pikachu).
// // API URL: https://pokeapi.co/api/v2/pokemon/pikachu
// // Task: Log Pikachu's name, base experience, and types.

// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// // .then(res => res.json())
// // .then(data =>{
// //     console.log(data.name)
// //     console.log(data.base_experience)
// //     console.log(data.types)
// // })
// // .catch(error => console.log(error))

// // Challenge #6
// // 4️⃣ Fetch a List of Countries 🌍
// // Use the Rest Countries API to fetch a list of countries.
// // API URL: https://restcountries.com/v3.1/all
// // Task: Log the name, capital, and population of the first country in the list.

// // fetch("https://restcountries.com/v3.1/all")
// // .then(result => result.json())
// // .then(data =>{
// //     const firstCountry = data[0]
// //     console.log(firstCountry.name.common)
// //     console.log(firstCountry.capital)
// //     console.log(firstCountry.population)
// // })
// // .catch(error => console.log(error))
// // Challenge #7
// // 5️⃣ Fetch a Joke 🤣
// // Use the JokeAPI to get a random programming-related joke.
// // API URL: https://v2.jokeapi.dev/joke/Programming
// // Task: If it's a single-part joke, log it. If it's a two-part joke, log the setup and punchline separately.

// // fetch("https://v2.jokeapi.dev/joke/Programming")
// // .then(res => res.json())
// // .then(data =>{
// //     console.log(data.setup)
// //     console.log(data.delivery)

// // })
// // .catch(error => console.log(error))


// Challenge #8 - Fetch Cryptocurrency Prices 💰
// API: CoinGecko
// URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd
// Task: Log Bitcoin and Ethereum prices in USD.

// fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
// .then(result => result.json())
// .then(data =>{
//     const bprice = data.bitcoin.usd
//     const eprice = data.ethereum.usd
//    console.log(`Bitcoin Price: $${bprice}`)
//    console.log(`Ethereum Price: $${eprice}`)
// })
// .catch(error => console.log(error))


// Challenge #9 - Fetch a NASA Astronomy Picture 🪐
// API: NASA APOD API
// URL: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// Task: Log the title, explanation, and image URL of NASA’s Astronomy Picture of the Day.
fetch("https://api.nasa.gov/planetary/apod?api_key=M8BARK7p4Dke7weFzONxDkFC7eeeDsZ9eBepcHx8")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))


// Challenge #10 - Fetch Top 10 Movies 🎬
// API: OMDb API
// URL: http://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
// Task: Log the title and year of the first 5 movies from the search results.
