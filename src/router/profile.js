const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")


const router = express.Router()




router.get('/',verificate, (req,res)=>{
    res.json(res.user)
  
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



      module.exports =   router
      