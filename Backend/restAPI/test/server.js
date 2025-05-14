const express = require ('express')
const app = express()
const port = 3000

// templating engine
app.set('view engine', 'ejs' )


// middleware
app.use(express.json()) // middleware to use for parsing response into JSON

// routes
app.get('/', (req,res) =>{
    res.send('Welcome to the User Management API')
})

// listen
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})