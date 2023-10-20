const express = require('express')
const db = require('../database')

const router = express.Router()


router.get('/',async (req,res)=>{
    const [result] = await db.promise().query('SELECT * FROM reports')
    res.json(result)

})

router.post('/', async(req,res)=>{
try {
    const {report,reporter,status,area,comments} = req.body;
    console.log(report)
    let sql = `insert into reports(report,reporter,status,area,comments,date,image) values(?,?,?,?,?,?,?)`;
    const [result] = await db.promise().execute(sql,[report,reporter,status,area,comments,new Date(),null])
   if(result.affectedRows>0) return res.json("The object was updated")

} catch (error) {
    console.log(error)
}
})
router.put('/', async(req,res)=>{
try {
    const {id,report,reporter,status,area,comments} = req.body;
    let sql = `UPDATE reports SET 
    report = ?,
    reporter =?,
    status = ?,
    area = ?,
    comments = ?,
    date = ?,
    image = ?
    WHERE id =?`;
    const [result] = await db.promise().execute(sql,[report,reporter,status,area,comments,new Date(), null, id])
    if(result.affectedRows>0) return res.json("The Report updated")

} catch (error) {
    console.log(error)
}
})

router.get('/:id',async (req,res)=>{
    const id = req.params.id
    const [result] = await db.promise().query('SELECT * FROM reports WHERE id=?',[id])
    res.json(result)

})
router.delete('/:id',async (req,res)=>{
    const id = req.params.id
    const [result] = await db.promise().query('DELETE FROM reports WHERE id=?',[id])
    res.json(result)

})


module.exports = router