const express = require('express')
var  bodyParser = require('body-parser');
var  cors = require('cors');
const app = express()
const port = 3000
const User = require("./router/auth")
const Task = require('./router/task')
const Profile = require('./router/profile')
const Report = require('./router/report')


app.use(express.json())
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next)=>{
  next();
})

// Router
app.use('/api', User)
app.use('/api/tasks', Task)
app.use('/api/reports', Report)
app.use('/api/profile', Profile)




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })