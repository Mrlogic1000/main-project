const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")


const router = express.Router()


router.post('/', async (req, res) => {
    let body = req.body
    // console.log(body)

    try {
        let sql = 'INSERT INTO tasks(name,type,status,assign,ob, date, due_date) values(?, ?, ?, ?,?,?,?)'
        await db.promise().query(sql, [body.name, body.type, body.status, body.assign, body.ob, new Date(), new Date()])
        res.json({ message: 'New data was added' })

    } catch (err) {
        console.log(err)
    }

})
router.get('/', verificate, async (req, res) => {
    const [result] = await db.promise().query('select * from tasks')
    res.json(result)
})

router.put('/', async (req, res) => {
    let body = req.body

    try {
        let sql = `UPDATE tasks SET name = '${body.name}', type=?, status=?, assign=?, ob=? WHERE id = ?`
        const [result] = await db.promise().execute(sql, [, body.type, body.status, body.assign, body.ob, body.id])
        res.json({ result })

    } catch (err) {
        console.log(err)
    }

})
router.get('/:id', async (req, res) => {

    const [data] = await db.promise().query('select * from tasks WHERE id=?', req.params.id)
    res.json(data)
})
router.delete('/:id', async (req, res) => {
    const id  = req.params.id    
    const [affectedRows] = await db.promise().query('DELETE FROM tasks WHERE id=?', [id])
    if (affectedRows.affectedRows > 0) {
        res.json("Task was deleted successfully")
    } else {
        res.json("No Item with the idenetity in the database")

    }



})

module.exports = router