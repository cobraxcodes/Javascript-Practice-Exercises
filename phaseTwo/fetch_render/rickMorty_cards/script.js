// // 6️⃣ Rick and Morty Character Cards
// // API: https://rickandmortyapi.com/api/character
// // Goal: Display cards with:

// // Name - done
// // Image - done
// // Status (Alive/Dead/Unknown) - done
// // Species - done
// // Bonus: Add a filter by status.

// setting starter page 
let page = 1

// wrapping it in a function so reusable for next / previous button
function rickMortyCharacters (page){
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(res => {

        // clears out page for next
        cardContainer.innerHTML = ' ';

        res.results.forEach(character =>{
            const characterDiv = document.createElement('div')
            characterDiv.id= 'characterDiv'
            const mainContainer = document.getElementById('cardContainer')
            mainContainer.appendChild(characterDiv)
    
            //Name
            const characterName = document.createElement('h3')
            characterName.textContent = character.name
            characterDiv.appendChild(characterName)
    
            //Status
            const characterStat = document.createElement('p')
            characterStat.textContent = ` Status: ${character.status}`
            characterDiv.appendChild(characterStat)
            
            //species
            const characterSpecies = document.createElement('span')
            characterSpecies.textContent = ` | Species: ${character.species}`
            characterStat.appendChild(characterSpecies)
    
            //Image
            const characterImg = document.createElement('img')
            characterImg.src= character.image
            characterDiv.appendChild(characterImg)
          
    
        })
    })
    .catch(error => console.log(error))
}
// calling the function here
rickMortyCharacters(page)

// previous button
document.getElementById('previousBtn').addEventListener('click', ()=>{
    // this just decreases page number
    page--
    // calling it again here so that the fetch initatiates
    rickMortyCharacters(page)
})

// next button
document.getElementById('nextBtn').addEventListener('click', ()=>{
    // this just increases page number 
    page++
    // this actually calls the fetch thing to happen again
    rickMortyCharacters(page)
})


document.getElementById('searchBtn').addEventListener('click', ()=>{
    const input = document.getElementById('searchBar').value.toLowerCase()
    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
    .then(res => res.json())
    .then(res =>{
        cardContainer.innerHTML = ' '
        const result = res.results.filter(character => character.name.toLowerCase().includes(input))

        // dynamically show
        result.forEach(character => {

            // creating div for each character
            const characterDiv = document.createElement('div')
            document.getElementById('cardContainer').appendChild(characterDiv)

            //name 
            const nameDoc = document.createElement('h3')
            nameDoc.textContent = character.name
            characterDiv.appendChild(nameDoc)

            //status
            const statusDoc = document.createElement('p')
            statusDoc.textContent = `Status: ${character.status}`
            characterDiv.appendChild(statusDoc)

            //Species
            const speciesDoc = document.createElement('span')
            speciesDoc.textContent = `Species:${character.species}`
            statusDoc.appendChild(speciesDoc)

            //image
            const imageDoc = document.createElement('img')
            imageDoc.src = character.image
            characterDiv.appendChild(imageDoc)
        })
    })
    .catch(error => console.log(error))
})
