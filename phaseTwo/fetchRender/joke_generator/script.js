// API: https://official-joke-api.appspot.com/random_joke
// Goal: Show a random joke with setup + punchline.
// Bonus: Add a button to get a new joke on click.

fetch("https://official-joke-api.appspot.com/random_joke")
.then(res => res.json())
.then(res =>{

    //JOKE SETUP
     const createJoke = () =>{
        // clear previous joke
        jokeContainer.innerHTML = '';
        let setUpJoke = res.setup
        let jokeDocument = document.createElement('h2')
        jokeDocument.textContent= setUpJoke
        jokeDocument.id = 'jokeDocument'
        jokeContainer.appendChild(jokeDocument)

        // PUNCHLINE SETUP
        let punch = res.punchline
        const punchDocument = document.createElement('p')
        punchDocument.textContent = punch
        punchDocument.id= 'punchDocument'
        jokeDocument.appendChild(punchDocument)

        

     }
     document.getElementById('jokeButton').addEventListener('click', createJoke)
   
  
})

// GIVES A JOKE EVERY CLICK AND NOT ONLY
// WHEN JOKE IS ALREADY FETCHED

// document.getElementById('jokeButton').addEventListener('click', () => {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then(res => res.json())
//         .then(res => {
//             const jokeContainer = document.getElementById('jokeContainer'); // Assuming jokeContainer is defined in your HTML
//             jokeContainer.innerHTML = ''; // Clear the previous joke

//             // Joke Setup
//             const jokeDocument = document.createElement('h2');
//             jokeDocument.textContent = res.setup;
//             jokeContainer.appendChild(jokeDocument);

//             // Punchline Setup
//             const punchDocument = document.createElement('p');
//             punchDocument.textContent = res.punchline;
//             jokeContainer.appendChild(punchDocument);
//         });
// });
