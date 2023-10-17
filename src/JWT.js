const {sign, verify} = require('jsonwebtoken')
require('dotenv').config()


function createToken(user){
    const accessToken = sign(
        {username:user.username, 
        id:user.id, }, process.env.JWTKEY)       
    return accessToken;
}

function verificate(req,res,next){
    const accessToken = req.headers.authorization.split(" ")[1]    
   const token = verify(accessToken,process.env.JWTKEY )
   res.user = token
    return next()

}
module.exports = {
    createToken,
    verificate
}