const express = require('express')
const mongoose = require('mongoose')


let schema =mongoose.Schema
let blood = new schema({
  name:String,
  phone:String,
  email:String,
  gender:String,
  bloodgroup:String,
  address:String,
  bio:String,
  img:{
    nm:String,
    ids:String
  }
  
})

let Blooddonot = mongoose.model('Blooddonot',blood)

module.exports=Blooddonot