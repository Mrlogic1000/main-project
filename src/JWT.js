const {sign, verify} = require('jsonwebtoken')


function createToken(user){
    const accessToken = sign(
        {username:user.username, 
        id:user.id, }, 'secretkey')
    return accessToken;
}

function verificate(req,res,next){
    console.log(req.headers)
    return next()

}
module.exports = {
    createToken,
    verificate
}