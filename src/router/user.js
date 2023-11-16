const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")
const controller = require("../controller/UserController")


const router = express.Router()


router.get('/', controller.getUsers)

router.post('/', controller.postUser)

router.delete('/:id', controller.deleteUser)

router.get('/:id',controller.getUserById)

router.put('/', controller.putUser)

module.exports = router
