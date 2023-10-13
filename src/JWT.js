const {sign, verify} = require('jsonwebtoken')


function createToken(user){
    const accessToken = sign(
        {username:user.username, 
        id:user.id, code:user.code}, 'secretkey')
    return accessToken;
}

module.exports = {
    createToken
}