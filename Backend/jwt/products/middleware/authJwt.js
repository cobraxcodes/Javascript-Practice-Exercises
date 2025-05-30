const {verifyToken} = require ('../utils/jwtUtils.js')

const authenticate = (req,res, next) =>{
    const token = req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({
            message: `No Token provided!`
        })
    }

    const decoded = verifyToken(token);

    if(!decoded){
        res.status(201).json({
            message: `Unable to verify token!`
        })
    }

    req.user = decoded
    next()
}

module.exports = {authenticate};