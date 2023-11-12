const express = require('express')
const db = require('../database')
const controller = require("../controller/ReportController")



const router = express.Router()


router.get('/', controller.getReport)

router.post('/', controller.postReport)

router.put('/', controller.updateReport)

router.get('/:id', controller.findReport)
router.delete('/:id', controller.deleteReport)


module.exports = router