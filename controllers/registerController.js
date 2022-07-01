const newCommers = require("../models/newModel")

const registerGet = (req,res) =>{
    res.render("register.ejs",)
}

const registerPost = async (req,res) =>{
    const {email} =req.body 
    newCommers.findOne({email:req.body.email}, (err, user) =>{
        if(email === user.email){
            console.log("User exists, try another email adress...")
            res.render("register.ejs")
        }else{
            var newUser = new newCommers({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            try{
                newUser.save()
                res.redirect("/login")
            }catch(err){ 
                res.status(400).json(err)
            }
        }        
    })

    
}

module.exports = {
    registerGet,
    registerPost
}