const blooddatebase =require('../schema/blooddonot')
const nodemailer = require('nodemailer');

exports.gethome=(req,res)=>{
    res.render('../views/bloodhome.ejs')
     
   }
exports.getalldonor=(req,res)=>{
    blooddatebase.find().sort({_id:-1})
    .then(c =>{
      res.render('../views/blooddonorlist.ejs' ,{tital:"Demo View",c})
     
    }).catch(e =>{
      res.send(e)
    }) 
}


exports.getcreatnewdonor=(req,res)=>{
 res.render('../views/blooddonote.ejs')
  
}

exports.postcreatnewdonor=(req,res)=>{
    let name=req.body.fullname
    let email=req.body.email
    let phone=req.body.phone
    let bloodgroup=req.body.bloodgroup
    let gender =req.body.gender
    let address=req.body.address
    let bio=req.body.textareas
    let imagearry =[{
        nm:"../images/A+.PNG",
        ids:"A+"
    },
    {
      nm:"../images/A-.PNG",
      ids:"A-"
  },  {
      nm:"../images/B+.PNG",
      ids:"B+"
  },
  {
      nm:"../images/B-.PNG",
      ids:"B-"
  },
  
  {
      nm:"../images/AB+.PNG",
      ids:"AB+"
  }, {
      nm:"../images/AB-.PNG",
      ids:"AB-"
  },
  {
      nm:"../images/O+.PNG",
      ids:"O+"
  },
  {
      nm:"../images/O-.PNG",
      ids:"O-"
  }];
  imagearry.forEach((img)=>{
    if(bloodgroup===(img.ids)){
        let donorsave = new blooddatebase({
            name,
            email,
            phone,
            bloodgroup,
            gender,
            address,
            bio,
            img
            
        })
        donorsave.save()
        .then(t =>{
            res.redirect('/blood/donorlist')
        })
        .catch(e=>{
        
        })
       
       
    }
})
}
exports.getsingledonor=(req,res)=>{   
    let {id} = req.params
    blooddatebase.findById(id)
    .then(c =>{
      res.render('../views/bloodsinglepage.ejs',{tital:"Demo View",c})
    }).catch(e =>{
      res.send(e)
    })
      
}

  
   exports.getcontectus=(req,res)=>{   
   
      res.render('../views/bloodcontect.ejs')
    
}
exports.getaboutus=(req,res)=>{   
   
    res.render('../views/bloodabout.ejs')
  
}
exports.postcontectus=(req,res)=>{

    let name =req.body.name
    let email=req.body.email
    let textareas=req.body.textareas
   
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mdshahariar348@gmail.com',
          pass: 'SAJAL4444'
        }
      });

      var mailOptions = {
        from: 'mdshahariar348@gmail.com',
        to: email,
        subject: name,
        text:textareas
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
       // res.redirect('/blood/contectus')
      })
}
