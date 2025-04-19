// 1️⃣ Crypto Tracker Lite
// API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
// Goal: Display the top 5 cryptocurrencies with:

// Name
// Symbol
// Current price
// Price change percentage
// Logo
// Bonus: Color code green for +change, red for –change.

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
.then(res => res.json())
.then(res => {
    res.slice(0,5).forEach(coin =>{
        //name
        const name = coin.name
        const nameDocument = document.createElement('h3')
        nameDocument.textContent=name
        nameDocument.id="name"
       document.body.appendChild(nameDocument)
        console.log(coin.name)
        
        //
        
    })

    // for each data create a document ('h3') for name
    // h4 for symbol
    // p for price and price change percentage
})