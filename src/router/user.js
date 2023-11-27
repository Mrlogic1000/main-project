const express = require('express')
const db = require('../database')
const {verificate}= require("../JWT")
const controller = require("../controller/UserController")
const path = require('path')
const multer = require("multer")




const router = express.Router()


router.get('/', controller.getUsers)

router.post('/', controller.createUser)


const storage = multer.diskStorage({
    destination:((req,file,cb)=>{
        cb(null,'./images')
    }),
    filename:((req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    })
})


const upload = multer({
    storage:storage,
    limits: '1000000',
    fileFilter:(req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimeType && extname) return cb(null,true)
        return cb('Upload the proper file')

    }
})

router.put('/:id', upload.single('image'),controller.updateImage)

router.delete('/:id', controller.deleteUser)

router.get('/:id',controller.getUserById)

router.put('/', controller.updateUser)

module.exports = router
