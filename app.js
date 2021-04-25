const express = require('express')
const app = express()
const path=require('path')
const port =8080
const mongoose = require('mongoose')
const aboutrouter=require('./router/router')

const demorouter=require('./router/paly')
const bloodrouter=require('./router/bloodhometouter')


app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static('public'))
app.use('/public',express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))


app.use('/demo',demorouter)
app.use('/user',aboutrouter)
app.use('/blood',bloodrouter)

app.get('/',(req,res)=>{
  res.send("This is home page")
})
app.get('*',(req,res)=>{
  res.send("<h1>404 Not Found </h1>")
})



mongoose.connect('mongodb://localhost:27017/Demobd',
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)}) 
    }).catch(e=>{
  console.log(e)
});






