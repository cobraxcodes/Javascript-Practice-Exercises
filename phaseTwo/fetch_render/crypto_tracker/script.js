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
        console.log(coin)

        //name & symbol
        const name = coin.name
        const symbol = coin.symbol
        const nameDocument = document.createElement('h3')
        nameDocument.textContent= `${name}  ${symbol.toUpperCase()}`
        nameDocument.id="name"
       document.body.appendChild(nameDocument)
        console.log(coin.name)

        //current price
        
    })

    // p for price and price change percentage
})