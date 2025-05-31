const {verifyToken} = require ('../utils/jwtUtils.js')

const authenticate = (req,res, next) =>{
    const token = req.headers.authorization?.split(' ')[1]
    console.log(token)

    if(!token){
        console.log(`No Token provided`)
        return res.status(401).json({
            message: `No Token provided!`
        })
    }

    const decoded = verifyToken(token);
    console.log(decoded)


    if(!decoded){
        console.log(`Token not valid`)
       return res.status(401).json({
            message: `Unable to verify token!`
        })
    }

    req.user = decoded
    console.log(`token verified proceed to next`)
    next()
}

module.exports = {authenticate};