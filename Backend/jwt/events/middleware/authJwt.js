const {verifyToken} = require ('../utils/jwtUtils.js')

const authenticate = (req,res,next) =>{
    try{
        const token = req.headers.authorization?.split(' ')[1]
        console.log(`Token was provided`)
    if(!token){
        res.status(401).json({
            message: `No token recieved!`
        })
    }
    const verifiedToken = verifyToken(token)
    console.log(`Token is verified`)
    if(!verifiedToken){
        res.status(401).json({
            message: `Token cannot be verfied!`
        })
    }
    req.user = verifiedToken
     next()
    }catch(err){
        console.log(`I am hit in next`)
        next(err)
    }
}

module.exports = {authenticate}