const {generateToken} = require ('./jwtUtils')

const loginUser = (req,res) =>{
    const {username, password} = req.body
}

// simulate pass
if(username === 'admin' && password === '1234'){
    const token = generateToken ({ username, role: 'admin'})
    res.status(200).json({
        message: 'Login sucessful', token
    })
}else{
    res.statys(401).json({
        message: 'Invalid credentials '
    })
}

module.exports = {loginUser}