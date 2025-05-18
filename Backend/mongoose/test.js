        // BASIC MODEL / SCHEMA SYNTAX USING MONGOMEMORY SERVER

// const { MongoMemoryServer } = require('mongodb-memory-server') // importing mongo db in-memory server
// const mongoose = require('mongoose') // importing mongoose . required odm for node and mongoose

// const start = async () => { // creating a start function to connect to  in-memory server
//   const mongoServer = await MongoMemoryServer.create() // creating the server 
//   const uri = mongoServer.getUri() // getting the uri for the server. uri is needed to tell mongoose which server to connect to 

//   await mongoose.connect(uri) // connecting to the server using uri
//   console.log('MongoDB Memory Server connected!')

//   const taskSchema = new mongoose.Schema({ // this is the model/schema for the database
//     name: String,
//     done: Boolean
//   })

//   const Task = mongoose.model('Task', taskSchema) // creating the actual model and storing it in the variable named task

//   await Task.create({ // this is how to create a new task
//     name: 'Walk the Dog',
//     done: true
//   })

//   const tasks = await Task.find() // using .find to get all task
//   console.log(tasks)
// }

// start()
