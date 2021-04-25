const express =require('express')
const path =require('path')
const bloodrouter = express.Router()

const{
   gethome,
   getalldonor,
   postcreatnewdonor,
   getcreatnewdonor,
   getsingledonor,
   getcontectus,
   postcontectus,
   getaboutus
}=require('../contro/bloodcontrollar')

bloodrouter.get('/home', gethome)

bloodrouter.get('/donorlist',getalldonor)
bloodrouter.get('/creatnewdonor',getcreatnewdonor)
bloodrouter.post('/creatnewdonor',postcreatnewdonor)


bloodrouter.get('/contectus', getcontectus)
bloodrouter.post('/contectus', postcontectus)


bloodrouter.get('/aboutus', getaboutus)
bloodrouter.get('/:id', getsingledonor)

module.exports = bloodrouter; 