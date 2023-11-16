const express = require('express')
var  bodyParser = require('body-parser');
var  cors = require('cors');
const app = express()
const port = 4000
const Auth = require("./router/auth")
const Task = require('./router/task')
const Profile = require('./router/profile')
const Report = require('./router/report')
const Deivce = require('./router/device')
const User = require('./router/user')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
  next();
})

// Router
app.use('/api', Auth)
app.use('/api/tasks', Task)
app.use('/api/reports', Report)
app.use('/api/profile', Profile)
app.use('/api/devices', Deivce)
app.use('/api/users', User)




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })