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
exports.getAll = async(req,res,next) =>{
    try{
        const allReviews = await reviews.find()
        res.json({
            status: 200,
            reviews: allReviews
        })

    }catch(err){
        next(err)
    }
}

//update logic

//delete logic


//get by name logic