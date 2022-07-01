const newCommers = require("../models/newModel")


const loginGet = (req,res) =>{
    res.render("login.ejs")
}

const loginPost = (req,res)=>{
    const {password} =req.body
    newCommers.findOne({email:req.body.email},(err,user)=>{
        if(user){
           if(password === user.password){
                console.log("Login success")
                res.send({user:user})
           }else{
               console.log("Wrong Password")
           }
        }else{
            res.json({msg: "not register"})
        }
    })
}

module.exports = {
    loginGet,
    loginPost
}


