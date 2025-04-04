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

// fetch("https://api.nasa.gov/planetary/apod?api_key=M8BARK7p4Dke7weFzONxDkFC7eeeDsZ9eBepcHx8")
// .then(res => res.json())
// .then(data=>{
//     console.log(`Title: ${data.title}`)
//     console.log(`Summary: ${data.explanation}`)
//     console.log(data.hdurl)
// })
// .catch(error => console.log(error))


// Challenge #10 - Fetch Top 10 Movies 🎬
// API: OMDb API
// URL: http://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY
// Task: Log the title and year of the first 5 movies from the search results.

// fetch("http://www.omdbapi.com/?s=batman&apikey=c0527436")
// .then(res => res.json())
// .then(data =>{
//     const first = data.Search[0]
//         console.log(`Title: ${first.Title}`)
//         console.log(`Year: ${first.Year}`)
//     const second = data.Search[1]
//         console.log(`Title: ${second.Title}`)
//         console.log(`Year: ${second.Year}`)
//     const third = data.Search[2]
//          console.log(`Title: ${third.Title}`)
//          console.log(`Year: ${third.Year}`)
//     const fourth = data.Search[3]
//          console.log(`Title: ${fourth.Title}`)
//          console.log(`Year: ${fourth.Year}`)
//     const five = data.Search[4]
//          console.log(`Title: ${five.Title}`)
//          console.log(`Year: ${five.Year}`)
// })
// .catch(error => console.log(error))







// LOOPING THROUGH APIs
// 1️⃣ Fetch Latest News Articles 📰
// API: News API
// 📌 Why? News sites & dashboards need to display multiple articles.
// 🔹 Task: Fetch the latest 5 headlines from BBC News and log the title & description.
// fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a0b828bf5efd449b9980f7b20f9f8b59")
// .then(res => res.json())
// .then(data =>{
//     data.articles.slice(0,5).forEach(news => console.log(`Title: ${news.title} Description: ${news.description}`))
// })
// .catch(error => console.log(error))



// 2️⃣ Fetch a List of Space Missions 🚀
// API: SpaceX API
// 📌 Why? Useful for space-related apps & tracking launches.
// 🔹 Task: Fetch the last 5 SpaceX launches and log the mission name & launch year.
// // fetch("https://api.spacexdata.com/v5/launches")
// // .then(res => res.json())
// // // .then(data => console.log(data))
// // .then(data =>{
// //     data.slice(-5).forEach(launch => console.log(`Launch Name: ${launch.name} Launch Date: ${launch.date_utc}`))
// })

// 3️⃣ Fetch Top Trending Movies 🎬
// API: TMDb API
// 📌 Why? Movie apps need real-time trending lists.
// 🔹 Task: Fetch the top 5 trending movies today and log title & release date.
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDEzZDNjMWU3ZDQ1OGYyZjQ1OWFmOTJkNjgzNzhkYiIsIm5iZiI6MTc0MzY1NTE5Mi4zOCwic3ViIjoiNjdlZTExMTg0OTA5ZTI1YjA3YTc5NzAxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hy6V-Aah7jJW0BYDUMivqIE80-rh8sGeQa-FpjfT2nY'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//     .then(res => res.json())
//     // .then(data => console.log(data))
//     .then(data =>{
//         data.results.slice(0,5).forEach(movie => console.log(`Movie Title: ${movie.title}   Release Date: ${movie.release_date}`))
//     })
//     .catch(err => console.error(err));

// 4️⃣ Fetch Random Chuck Norris Jokes 🤣
// API: Chuck Norris Jokes
// 📌 Why? Fun apps use APIs for random jokes & entertainment.
// 🔹 Task: Fetch and log 5 different Chuck Norris jokes.
// const chuck = async () =>{
//         for(let i=0; i<5; i++){
//             try{
//                 const result = await fetch("https://api.chucknorris.io/jokes/random")
//                 const data = await result.json()
//                 console.log(data.value)
//             }catch(error) {
//                 console.log(error)
//             }
// }}

// chuck()


// 9️⃣ Fetch 5 Random Cat Images 🐱
// API: The Cat API
// 📌 Why? Used in pet adoption & entertainment apps.
// 🔹 Task: Fetch and display 5 random cat images.
// fetch("https://api.thecatapi.com/v1/images/search?limit=5")
// .then(res => res.json())
// .then(res=>{
//     res.slice(0,5).forEach(pic => console.log(pic.url))
// })
// .catch(error => console.log(error))


// 6️⃣ Fetch Popular JavaScript Books 📚
// API: Google Books API
// 📌 Why? Useful for book review sites & recommendation engines.
// 🔹 Task: Search for “JavaScript” books and log the titles & authors of 5 books.
// fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
// .then(res => res.json())
// .then(res =>{
//     res.items.slice(0,5).forEach(book => console.log(`Author: ${book.volumeInfo.authors}  Title:${book.volumeInfo.title}`))
// })
// .catch(error => console.log(error))

// 🔟 Fetch 5 Upcoming Sports Events ⚽
// API: The SportsDB
// 📌 Why? Sports apps use this for event schedules.
// 🔹 Task: Fetch and log 5 upcoming events for the English Premier League.

// fetch("https://www.thesportsdb.com/api/v1/json/3/searchfilename.php?e=English_Premier_League")
// .then(res => res.json())
// .then(res => {
//     // console.log(Object.keys(res)) // gets the root 
//     res.event.slice(0,5).forEach(match => console.log(match.strEvent))
// })
// .catch(error => console.log(error))


// 7️⃣ Fetch 5 Remote Job Listings 💼
// API: Remotive API
// 📌 Why? Used for job search sites & career platforms.
// 🔹 Task: Fetch and display 5 remote job titles and company names.

fetch("https://remotive.com/api/remote-jobs")
.then(res => res.json())
.then(res => console.log(res))
.catch(error => console.log(error))





// // 5️⃣ Fetch Cryptocurrency Prices 💰
// // API: CoinGecko
// // 📌 Why? Crypto apps show real-time prices.
// // 🔹 Task: Fetch and log the prices of Bitcoin, Ethereum, Solana, Dogecoin, and Cardano.
