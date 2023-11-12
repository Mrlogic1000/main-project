const db = require('../database')
const Model = require('../model/model')
const bcrypt = require("bcrypt")
require('dotenv').config()



Users = new class DeviceModel extends Model {
    constructor() {
        super('users')
    }
}


const signupUser = async (req, res) => {
    console.log(req.body)
    const { username, password,code, image } = req.body

    try {

        const result = await Users.getUser(username, password)
        // console.log(result)
        if (result) {
            res.status(500).json("username or code is already taken")
            return
        } else {
            bcrypt.hash(password, 10, async (err, hash) => { 
                if(err) console.log(err) 
                          
                const signup = await Users.create({ username, password:hash, code, image })
                console.log(signup)
                if (signup > 0) res.json({ messag: 'created successfully' })
            })
        }
    } catch (err) {
        console.log(err)
    }

}

module.exports = {
    signupUser
}