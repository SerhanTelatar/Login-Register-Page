const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const loginRouter = require("./routes/loginRouter")
const registerRouter = require("./routes/registerRouter")
const connectionDB = require("./config/db.js")


connectionDB()

app.set("view-engine", "ejs")
app.use(express.urlencoded({extended:false}))

app.use("/login", loginRouter)
app.use("/register", registerRouter)


app.get("/", (req, res) =>{ 
    res.render("index.ejs")
})



app.listen(port, () =>{
    console.log("Connected to server...")
})