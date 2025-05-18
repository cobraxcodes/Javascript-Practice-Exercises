const express = require('express')
const app = express()
const controller = require('./controller/controller.js')
const post = 3001
const connect = require('./database/database.js')

// no templating engine

//middleware
app.use(express.json())
app.use((err, req, res, next) =>{ // global error handler
    console.error(`Stack trace: ${err.stack}`)
    res.status(404).send(`Resource Not Found`)
});