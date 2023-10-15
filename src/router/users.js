const express = require("express")
const bcrypt = require("bcrypt")
const {createToken,verificate}= require("../JWT")
var db = require("../database")
require('dotenv').config()

const router = express.Router()

router.post('/signup', async(req, res) => {
  const {username,password,code,image} = req.body
  
  try {
    let sql = `SELECT * FROM users WHERE username = ? or code = ?`;
  const [result] = await db.promise().query(sql,[username,code])
  if(result.length > 0){
    console.log(result)
    res.status(500).json("username or code is already taken") 
    return
  }else{
    bcrypt.hash(password,process.env.SALT, (err,hash)=>{
      if(err) console.log(err)
      let sql = `INSERT INTO users(username,password,code,image) 
      values('${username}','${hash}','${code}','${image}')`
      db.promise().query(sql)
      res.json({ messag: 'created successfully' })
      // console.log(hash)
    })    
  }
   
  

  } catch (err) {
    console.log(err)
  }
  // console.log(req.body.username)
})

router.post('/login', async (req, res) => {
// console.log(req.body)
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


router.get('/users',verificate, (req,res)=>{

})



router.put('/', (req, res) => {
  try {
    let sql = `UPDATE users SET 
    username = '${req.body.username}',
    password = '${req.body.password}',
    code = '${req.body.code}',
    image = '${req.body.image}'
    WHERE id = '${req.body.id}'
    `

    db.promise().query(sql)
    res.json({ messag: 'update successfully' })

  } catch (err) {
    console.log(err)
  }
  // console.log(req.body.username)
})




router.get('/:id', async (req,res)=>{
  let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
  const [result] = await db.promise().query(sql)
  res.json(result)
  })

  router.delete('/delete/:id', async (req,res)=>{
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    const [result] = await db.promise().query(sql)
    res.json({message:'The item deleted'})
    })

module.exports = router