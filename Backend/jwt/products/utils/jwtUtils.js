const jwt = require ('jsonwebtoken')
require ('dotenv') .config()

const secretKey = process.env.JWT_SECRET;
const options = {
    expiresIn: '10'
}

// //{  other factors that can be used for options personalization
//   expiresIn: '1h',
//   issuer: 'myAppName',
//   subject: 'userLogin'
// }

const createToken = payload =>{
    return jwt.sign(payload, secretKey, options)
}

const verifyToken = (token, next) =>{
    try{
        return jwt.verify(token, secretKey)
    }catch(err){
        next(err)
    }
        
}

module.exports = {createToken, verifyToken}