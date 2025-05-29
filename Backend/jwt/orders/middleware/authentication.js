const {verifyToken} = require ('../utils/jwtUtils.js')

exports.authenticate = (req,res, next) =>{
    const token = req.headers.authorization?.split('')[1]

    if(!token){
        return res.status(401).json({
            message: 'No token provided'
        })
    }

   
     const decoded = verifyToken(token) // if there is token provided, then it is stored inside the decoded variable

     if(!decoded){ // if token cannot be verified
        return res.status(401).json({
            message: 'Invalid token'
        })
     }

     req.user = decoded;
     next()
    }
