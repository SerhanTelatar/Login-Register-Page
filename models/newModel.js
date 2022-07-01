const mongoose = require("mongoose")

const userSchema = mongoose.Schema

const newCommers = new userSchema({
    name:{
        type:String,
        unique: true
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type:String,
        unique: true
    }
})

module.exports = mongoose.model("newCommers", newCommers)