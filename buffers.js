const {Buffer} = require('node:buffer')
const fs = require('fs')

const image = fs.readFileSync('./b.jpg')
const buffer = new Buffer.from(image).toString('base64')
console.log(buffer)
