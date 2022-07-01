const express = require("express")
const router = express.Router()
const {loginGet, loginPost} = require("../controllers/loginController")

router.get("/", loginGet)

router.post("/", loginPost)

module.exports = router
