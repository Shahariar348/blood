const expree =require('express')
const router = expree.Router()
const {
    getcreatuser,
    getusers,
    getusers1,
    getupdate,
    getupdate1,
    getdelete

}=require('../contro/usercon')


router.get('/creatuser' ,getcreatuser)
router.get('/users' ,getusers)
router.post('/users' ,getusers1)
router.get('/delete/:id' ,getdelete)

router.get('/update/:id' ,getupdate)
router.post('/update/:id' ,getupdate1)





module.exports = router;