const express =require('express')
const router1 = express.Router()
const {check}=require('express-validator');
const {
    democreatuser,
    demousers,
    demousers1,
    bootsrap
}=require('../contro/democon')


router1.get('/democreat',democreatuser)
router1.get('/bootsrap' ,bootsrap)

router1.get('/demousers' ,demousers)
router1.post('/democreat',demousers1)

module.exports=router1