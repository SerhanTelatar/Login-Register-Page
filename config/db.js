const mongoose = require("mongoose")
require('dotenv').config();

const connectDataBase = async (req,res) =>{
    try{
        const connect = await mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>{
            console.log("Connected to database...")
        }
    )
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDataBase