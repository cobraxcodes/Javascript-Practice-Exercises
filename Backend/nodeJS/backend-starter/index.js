// importing the express framework to use
const express = require ('express')
// telling the app that we are using express as blueprint
const app = express()
// setting the port as 3000
const PORT = 3000

// GET REQUEST
app.get('/', (req,res) =>{
    // SENDING RESPONSE
    res.send('Hello Backend World!')
})

// LISTENING IF THE USER IS AT PORT 3000
// logs it in the console
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`)
})