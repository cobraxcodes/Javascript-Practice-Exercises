const event = require ('../model/model.js')

// CREATE Logic
exports.create = async (req,res,next) =>{
    try{
        const events = event.find()
        const newEvent = new event (req.body)
        const save = await newEvent.save()
        events.push(newEvent)
        
        res.json({
            status: 200,
            message: `Event ${req.body.name} saved!`,
            event: save
        })
    }catch(err){
        next(err)
    }
}