const express = require('express')
const app = express()
const port = 4001;


// templating engine



// middleware
app.use(express.json())


// route





// port
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})