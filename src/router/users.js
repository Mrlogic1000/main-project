const express = require("express")
const bcrypt = require("bcrypt")
var db = require("../database")

const router = express.Router()

router.post('/signup', (req, res) => {
  const {username,password,code,image} = req.body
  
  try {
   
  bcrypt.hash(password,10, (err,hash)=>{
    if(err) console.log(err)
    let sql = `INSERT INTO users(username,password,code,image) 
    values('${username}','${hash}','${code}','${image}')`
    db.promise().query(sql)
    res.json({ messag: 'created successfully' })
    // console.log(hash)
  })    

  } catch (err) {
    console.log(err)
  }
  // console.log(req.body.username)
})

router.get('/login', async (req, res) => {
  try {
    let sql = 'SELECT * FROM users'
    const [result] = await db.promise().query(sql)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
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

  router.delete('/:id', async (req,res)=>{
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    const [result] = await db.promise().query(sql)
    res.json({message:'The item deleted'})
    })

module.exports = router