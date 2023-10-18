const {sign, verify} = require('jsonwebtoken')
require('dotenv').config()


function createToken(user){
    const accessToken = sign(
        {username:user.username, 
        id:user.id, }, process.env.JWTKEY)       
    return accessToken;
}

function verificate(req,res,next){
    const bearer = req.headers["authorization"]
    if(typeof bearer != 'undefined'){
        const accessToken = bearer.split(" ")[1]  
        const token = verify(accessToken,process.env.JWTKEY )
        if(token){
            // console.log(token)
            req.token = token
            return next()
        }else{
            return res.status(403).json("Please authentication is neccessary") 

        }      

    }else{
        return res.status(403).json("The token is needed")

    }
    
   
   
    
  

}
module.exports = {
    createToken,
    verificate
}