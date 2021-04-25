const test1 =require('../schema/schema')


exports.getcreatuser = (req,res)=>{
  
 res.render('../views/index.ejs' ,{tital:"Creat users",})
}

exports.getusers = (req,res)=>{
    test1.find()
    .then(c =>{
      let num =1;
      res.render('fine' ,{tital : "User information ",c,num})
  
    }).catch(e =>{
      res.send(e)
    })
 
 }




exports.getusers1 = (req,res)=>{
    let name =req.body.name
  let email =req.body.email
  let phone =req.body.phone
  let tes1 = new test1({
      name,email,phone
  })
 


  tes1.save()
  .then(t =>{
  
      res.redirect('/user/users')
  })
  .catch(e=>{
  res.render('../views/index.ejs',{tital:"Craet users"})
  
  })
 
 }

exports.getdelete =(req,res)=>{
    
  let {id} = req.params
  test1.findByIdAndDelete(id)
    .then(c =>{
      
     res.redirect('/user/users')
  
    }).catch(e =>{
      res.send(e)
    })
  
}
exports.getupdate=(req,res)=>{
    let {id} = req.params
    test1.findById(id)
    .then(c =>{
      res.render('update' ,{tital:"Update Users",c})
    }).catch(e =>{
      res.send(e)
    })
  
}
exports.getupdate1=(req,res)=>{
    let {id} = req.params
    let name =req.body.name
    let email =req.body.email
    let phone =req.body.phone

    console.log(req.params) 

    test1.findByIdAndUpdate({_id:id},{$set:{
          name,
          email,
          phone
    }},
      {new:true,
      useFindAndModify:false})
      .then(() =>{ 
        test1.find()
        .then(c =>{
             
          res.redirect('/user/users')
        }).catch(e=>{
          res.send(e)
        })   
   
      }).catch(e =>{
        res.send(e)
      })
}


