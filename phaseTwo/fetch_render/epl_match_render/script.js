fetch('https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=1&s=2023-2024')
.then(res => res.json())
.then(data => {
//    const teams = data.events.slice(0,3).map(match =>(`Team: ${match.strEvent} ${match.intHomeScore} - ${match.intAwayScore}`))
//    const matches = document.createElement('h3')
//    matches.textContent =teams
//    matches.id = 'matches'
//    const matchParent = document.getElementById('matchInfoContainer')
//    matchParent.appendChild(matches)
   console.log(data)
}
)
.catch(error => console.log(error))
