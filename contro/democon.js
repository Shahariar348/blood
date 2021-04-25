const demodb =require('../schema/demoschema')
const {body,validationResult } = require('express-validator');
const forme =require('../utils/formator')

exports.democreatuser=(req,res)=>{

    res.render('../views/demointer' ,{tital:"Demo",
    error:{},info:{}})
}
exports.demousers=(req,res)=>{
    demodb.find()
    .then(c =>{
      res.render('../views/blooddonorlist.ejs' ,{tital:"Demo View",c})
     
  
    }).catch(e =>{
      res.send(e)
    })
 
}
exports.demousers1=(req,res)=>{
    
    let name =req.body.name
    let email =req.body.email
    let phone =req.body.phone
   let blood=req.body.blood
   console.log(blood)
  let imagearry =[{
      nm:"../images/A+.PNG",
      id:"A+"
  },
  {
    nm:"../images/A-.PNG",
    id:"A-"
},  {
    nm:"../images/B+.PNG",
    id:"B+"
},
{
    nm:"../images/B-.PNG",
    id:"B-"
},

{
    nm:"../images/AB+.PNG",
    id:"AB+"
}, {
    nm:"../images/AB-.PNG",
    id:"AB-"
},
{
    nm:"../images/O+.PNG",
    id:"O+"
},
{
    nm:"../images/O-.PNG",
    id:"O-"
}];
   imagearry.forEach((img)=>{
        if(blood===(img.id)){
            
             console.log()
            let de1 = new demodb({
                name,email,phone,img
                
            })
            console.log(img)
          
            de1.save()
            .then(t =>{
                res.redirect('/demo/demousers')
            })
            .catch(e=>{
            res.render('../views/index.ejs',{tital:"Craet users"})
            
            })
           
           
        }
  })
    
   }
   exports.bootsrap=(req,res)=>{
   
    res.render('../views/alldemo/bootsrap.ejs')
}