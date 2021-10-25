const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")


router.get("/registrate", controller.labas)


module.exports = router


