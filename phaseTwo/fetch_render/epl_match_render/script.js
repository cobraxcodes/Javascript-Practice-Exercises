// TEAM NAMES SCRIPT
fetch("https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2023-2024")
.then(res => res.json())
.then(res =>{
    const teams =  res.events.slice(0,5).map(team => (team.strEvent))
    teams.forEach(name => {
        const createName = document.createElement('p')
        createName.textContent = name
        createName.id = "dynamicName"
        teamNamesDiv.appendChild(createName)
    })
})
.catch(error => console.log(error))

// HOME SCORE
fetch("https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2023-2024")
.then(res => res.json())
.then(res => {
 const home = res.events.slice(0,5).map(home => (home.intHomeScore))
 home.forEach(scoring => {
    const scoreDocument = document.createElement('p')
    scoreDocument.textContent = scoring
    scoreDocument.id = "homeScoreDocument"
    homeScore.appendChild(scoreDocument)
 })
})
.catch(error => console.log(error))

// AWAY SCORE
fetch("https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2023-2024")
.then(res => res.json())
.then(res => {
    console.log(res)
})