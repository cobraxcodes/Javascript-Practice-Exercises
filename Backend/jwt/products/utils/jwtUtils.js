const jwt = require ('jsonwebtoken')
require ('dotenv') .config()

const secretKey = process.env.JWT_SECRET;

const createToken = payload =>{
    return jwt.sign(payload, secretKey)
}

const verifyToken = (token, next) =>{
   try{
        return jwt.verify(token, secretKey)
   }catch(err){
    next(err)
   }
}

module.exports = {createToken, verifyToken}