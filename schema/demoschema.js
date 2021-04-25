const express = require('express')
const mongoose = require('mongoose')


let schema =mongoose.Schema
let demo1 = new schema({
  name:String,
  phone:String,
  email:String,
  img:{
    nm:String,
    id:String
  }
  
})

let Demo = mongoose.model('Demo',demo1)

module.exports=Demo