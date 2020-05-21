const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

//create user profile
router.post("/users/:user_id/profile", controllers.createProfile)

//create user facts/interests
router.post("/users/:user_id/facts", controllers.createFacts)

module.exports = router
