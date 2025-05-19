const event = require ('../model/model.js')

// CREATE Logic
exports.create = async (req,res,next) =>{
    try{
        const events = await event.find() // wait to find events document
        const newEvent = new event (req.body) // create a new event with the info provided in request body
        const save = await newEvent.save() // awaits for the new event to be compeleted and then saves the new event created
        events.push(newEvent) // add the new event into the events document
        
        res.json({
            status: 200,
            message: `${req.body.name} event created!`,
            event: save
        })
    }catch(err){
        next(err)
    }
}


//READ logic
exports.all = async(req,res,next) =>{
    try{
        const allEvents = event.find()
        res.json({
            status: 200,
            events: allEvents
        })

    }catch(err){
       next(err)
    }
}