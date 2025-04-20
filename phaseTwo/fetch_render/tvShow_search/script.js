// 9️⃣ TV Show Search (Input-based Fetch)
// API: https://api.tvmaze.com/search/shows?q=QUERY
// Goal: Add a search input. When the user types and presses Enter, show a list of shows with:

// Title
// Image
// Summary

document.getElementById('searchBtn').addEventListener('click', () =>{
    const input = document.getElementById('inputBox').value.toLowerCase()
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(res => res.json())
    .then(res =>{
        const result = res.filter(movie => movie.show.name.toLowerCase().includes(input))
        
        //dynamically show
        result.forEach(movie =>{

            //creating a div for each
            const movieItem = document.createElement('div')
            movieItem.id="movieItem"

            // movie title
            const movieDoc = document.createElement('h3')
            movieDoc.textContent = movie.show.name
            movieItem.appendChild(movieDoc)

            // movie image
            const movieImage = document.createElement('img')
            movieImage.src= movie.show.image.original
            movieImage.id='movieImg'
            movieItem.appendChild(movieImage)

            movieDiv.appendChild(movieItem)
           
            
        })
    })
})
.catch(error => console.log(error))

