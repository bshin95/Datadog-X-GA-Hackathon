const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.post("/users/:user_id/profile", controllers.createProfile)

module.exports = router
