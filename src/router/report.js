const express = require('express')
const db = require('../database')

const router = express.Router()


router.post('/', async(req,res)=>{
try {
    const body = req.body;
    let sql = `insert into report(report,reporter,status,area,comments,date,image values(?,?,?,?,?,?,?)`;
    db.promise().execute(sql,[body.report,body.reporter,body.status,body.area,body.comments,new Date(),NULL])
    res.json({message:'Data created'})

} catch (error) {
    
}
})