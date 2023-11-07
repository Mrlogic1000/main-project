const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")


const router = express.Router()


router.get('/', async (req, res) => {
    const [result] = await db.promise().query('select * from devices')
    res.json(result)
})

router.post('/', async (req, res)=>{
   try{
    const {name, device_id, status, installation,description,categories,network_address,mac} = req.body
    const sql = `
    INSERT INTO DEVICES(name, device_id, status, installation,description,categories,network_address,mac)
    values(?,?,?,?,?,?,?,?)`
    const [result] = await db.promise().execute(sql,[name, device_id, status, installation,description,categories,network_address,mac])
    if(result.affectedRows>0){
        res.status(200).json("All data saved successfully")
    }

   }catch(error){
    console.log(error)
   }
})

router.delete('/:id', async (req, res) => {
   try {
    const id  = req.params.id    
    const [affectedRows] = await db.promise().query('DELETE FROM devices WHERE id=?', [id])
    if (affectedRows.affectedRows > 0) {
        res.json("Task was deleted successfully")
    } else {
        res.json("No Item with the idenetity in the databases")

    }

   } catch (error) {
    console.log(error)
   }


})

router.get('/:id',async (req,res)=>{
    const id = req.params.id
    const [result] = await db.promise().query('SELECT * FROM devices WHERE id=?',[id])
    res.json(result)

})

router.put('/', async (req, res)=>{
    try{
     const {name, device_id, status, installation,description,categories,network_address,mac} = req.body
     const sql = `
     UPDATE devices SET 
     name = ?, 
     device_id = ?, 
     status = ?, 
     installation = ?,
     description = ?,
     categories = ?,
     network_address = ?,
     mac =?
     WHERE id = ?`
     const [result] = await db.promise().execute(sql,[name, device_id, status, installation,description,categories,network_address,mac])
     if(result.affectedRows>0){
         res.status(200).json("All data saved successfully")
     }
 
    }catch(error){
     console.log(error)
    }
 })

module.exports = router
