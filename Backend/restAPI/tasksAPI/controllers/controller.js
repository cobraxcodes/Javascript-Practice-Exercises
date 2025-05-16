const tasks = require('../models/model.js')

// GET ALL LOGIC
exports.getAll = (req,res) =>{
   res.json(tasks.taskModel())
}

//GET BY NAME
exports.getName = (req,res) =>{
    const task = tasks.taskModel().find(x => x.name.toLowerCase() === req.params.name.toLowerCase())
    if(!task){return res.status(404).send(`Sorry, cannot find the task you are looking for!`)}
    res.json({
        status: 200,
        name: task
    })
}