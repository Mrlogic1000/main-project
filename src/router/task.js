const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")
const controller = require('../controller/TaskController')


const router = express.Router()


router.post('/', controller.postTask)
router.get('/', controller.getTask)

router.put('/',controller.updateTask)
router.get('/:id', controller.getTaskById)
router.delete('/:id', controller.deleteTask)

module.exports = router