const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

// router.get("/", (req, res) => res.send("This is root!"))
//create user profile
router.post("/users/:user_id/profile", controllers.createProfile)

//create user facts/interests
router.post("/users/:user_id/facts", controllers.createFacts)
router.get("/users/:user_id/facts", controllers.getFactsFromUser)
router.post("/facts", controllers.createFacts)
router.get("/facts", controllers.getAllFacts)

// router.get("/facts", (req, res) => res.send("Facts route"));

module.exports = router