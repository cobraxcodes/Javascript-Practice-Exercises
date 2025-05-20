const reviews = require ('../model/model.js')

// create logic
exports.create = async (req,res,next) =>{
    try{
        const newReview = new reviews (req.body)
        const saveReview = await newReview.save()
        res.json({
            status: 200,
            message: `Review Created!`,
            review: newReview
        })

    }catch(err){
        next(err)
    }
}

//read logic

//update logic

//delete logic


//get by name logic