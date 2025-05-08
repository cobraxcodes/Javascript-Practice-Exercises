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

        //current price & price change percentage
        const price = coin.current_price
        const percentage = coin.price_change_percentage_24h

        const priceDoc = document.createElement('p')
        const percentageDoc = document.createElement('span')

        priceDoc.textContent = `$${price}`
        percentageDoc.textContent = ` ${percentage.toFixed(3)} %`

        nameDocument.appendChild(priceDoc)
        priceDoc.appendChild(percentageDoc)
        if(percentage > 0){
            percentageDoc.style.color = 'green'
        }else{
            percentageDoc.style.color = 'red'
        }
        
        

        // logo
        const logo = coin.image
        const logoImg = document.createElement('img')
        logoImg.src = logo
        nameDocument.appendChild(logoImg)
    })

    // p for price and price change percentage
})