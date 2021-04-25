const express = require('express')
const mongoose = require('mongoose')


let schema =mongoose.Schema
let tesr = new schema({
  name:{
      type:String,
      required: true,
      max:15,
      
  },
  phone:{
    type:String,
    required: true,
    min:11,
    max:13
  },
  email:{
    type:String,
    required: true,
  }
})

let Test = mongoose.model('Test',tesr)

module.exports=Test