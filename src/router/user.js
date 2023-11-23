const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")
const controller = require("../controller/UserController")
const path = require('path')
const multer = require("multer")




const router = express.Router()


router.get('/', controller.getUsers)

router.post('/', controller.createUser)


// const storage = multer.diskStorage({
//     destination:((req,file,cb)=>{
//         cb(null,path.join(__dirname,''))
//     }),
//     filename:((req,file,cb)=>{
//         cb(null,file.fieldname + '_' + Date.now())
//     })
// })


const upload = multer({storage:multer.memoryStorage()})

router.put('/:id', upload.single('image'),controller.updateImage)

router.delete('/:id', controller.deleteUser)

router.get('/:id',controller.getUserById)

router.put('/', controller.updateUser)

module.exports = router
