const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")
const controller = require("../controller/DeviceController")


const router = express.Router()


router.get('/', controller.getDevice )

router.post('/', controller.postDevice)

router.delete('/:id', controller.deleteDevice)

router.get('/:id',controller.getDeviceById)

router.put('/', controller.putDevice)

module.exports = router
