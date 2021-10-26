const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")


router.post("/register", controller.labas)
// router.post("/register", (req, res) => {
//     console.log(req.body)
//     res.send('router OK')
// })


module.exports = router


