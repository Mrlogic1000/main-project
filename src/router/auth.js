const express = require("express")
const bcrypt = require("bcrypt")
const {createToken}= require("../JWT")
var db = require("../database")
require('dotenv').config()
const controller = require('../controller/UserController')


const router = express.Router()

router.post('/signup', controller.signupUser)

// ********************************Login*************************************************

router.post('/login', async (req, res) => {
  const {username,password} = req.body
  
  try {
    let sql = `SELECT * FROM users WHERE username = ?`;
  const [result] = await db.promise().query(sql,[username])  
  
  if(!username) res.status(400).json({error:'Please the username cannot be empty'}) 
  if(!result) res.status(400).json({error:'The user is not register'})
    bcrypt.compare(password,result[0].password).then((match)=>{
      if(!match){
        res.status(400).json({error:'combination of wrong username or password supply'})
      }
      const accessToken = createToken(result[0])      
      res.status(200).json({accessToken})
    })
  } catch (err) {
    console.log(err)
  }
})












module.exports = router