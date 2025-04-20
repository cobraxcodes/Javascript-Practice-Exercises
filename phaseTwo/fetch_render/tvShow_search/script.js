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
            moviesContainer.innerHtml = ''
            const movieDoc = document.createElement('p')
            movieDoc.textContent = movie.show.name
            moviesContainer.appendChild(movieDoc)
            
            
        })

.catch(error => console.log(error))