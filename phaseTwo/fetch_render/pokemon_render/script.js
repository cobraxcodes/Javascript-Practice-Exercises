//    https://pokeapi.co/api/v2/pokemon?limit=5
//    This will give you a list of the first 5 Pokémon with their names and URLs to get more info.
// 3. For **each Pokémon**, fetch its **detailed data** from its URL (in the `.url` property).
// 4. Render the following for each Pokémon:
//    - Pokémon name
//    - Image (`sprites.front_default`)
//    - Base experience (`base_experience`)
//    - Type(s) (you can loop through the types array)
//    - Weight
// ### 🌈 Bonus:
// - Add a search bar to look up a specific Pokémon by name.
// - Add loading text/spinner while fetching.ol



// SEARCH FUNCTION
  // getElement searchbar and create event listener with keyup
  document.getElementById('search').addEventListener('keyup', ()=>{
        // get input from search bar
        const input = document.getElementById('search').value.toLowerCase()
        const container = document.getElementById('pokemonContainer')
          // make sure to have inner html as empty
        container.innerHTML = ' '

          // fetch the data using async
      const fetchData = async(URL) =>{
        try{
            // fetching the data waiting for the results
            const fetching = await fetch(URL)

            // if unable create a new error that logs message
            if(!fetching.ok) throw new Error("Unable to fetch data")

                // if able render response into json
              const res = await fetching.json()

               // loop through (if there's any) and create a div for each and display anything required
            const pokemonDiv = document.createElement('div')
            container.appendChild(pokemonDiv)

                    // name
                    const pokemonName = document.createElement('h3')
                    pokemonName.textContent = res.name
                    pokemonDiv.appendChild(pokemonName)

                    //image
                    const pokemonImage = document.createElement('img')
                    pokemonImage.src = res.sprites.front_shiny
                    pokemonDiv.appendChild(pokemonImage)

                    //type
                    const pokemonType = document.createElement('p')
                    pokemonType.textContent = `Type: ${res.types.map(type => type.type.name)}`
                    pokemonDiv.appendChild(pokemonType)

                    //weight
                    const pokemonWeight = document.createElement('p')
                    pokemonWeight.textContent = `Weight: ${res.weight}`
                    pokemonDiv.appendChild(pokemonWeight)

                    //base experience
                    const pokemonExperience = document.createElement('p')
                    pokemonExperience.textContent = res.base_experience
                    pokemonDiv.appendChild(pokemonExperience)

                    
              
        }catch(Error){
            console.error('Error')
        }
      }
      fetchData(`https://pokeapi.co/api/v2/pokemon/${input}`)
  })


  

  
 