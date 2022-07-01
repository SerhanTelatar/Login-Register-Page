const express = require("express")
const router = express.Router()
const {registerGet, registerPost} = require("../controllers/registerController")


router.get("/", registerGet)

router.post("/", registerPost)

module.exports = router
