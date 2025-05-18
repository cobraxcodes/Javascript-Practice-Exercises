

// CRUD: Full CRUD by book title or ID

// connect backend to mongoose in-memory servre
const mongoose = require ('mongoose') // require mongoose 
const { MongoMemoryServer } = require ('mongodb-memory-server') // and the in-memory server

let mongoServer; 

 const connect = async () =>{ // connect function to connect into in-memory server
    mongoServer = await MongoMemoryServer.create()
    const uri = mongoServer.getUri()
    await mongoose.connect(uri)
    console.log(`Connected to Mongo in-memory server`)
 }


 const close = async () =>{ // close function to close server
    await mongoose.disconnect()
    await mongoServer.stop()
 }

 module.exports = { connect, close } // exporting 