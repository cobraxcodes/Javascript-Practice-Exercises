const {verifyToken} = require ('../utils/jwtUtils.js')

const authenticate = (req,res, next) =>{
    const token = req.headers.authorization?.split(' ')[1]

    if(!token){
        return res.status(401).json({
            message: 'No token provided'
        })
    }
    try{
         const decoded = verifyToken(token) // if there is token provided, then it is stored inside the decoded variable
            req.user = decoded;
              next()
     }catch(err){
        return res.status(401).json({ message: 'Invalid token' });
    }
}

    module.exports = {authenticate}