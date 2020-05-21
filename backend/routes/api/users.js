const express = require("express")
const router = express.Router()
const gravatar = require("gravatar") //A Globally Recognized Avatar
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator")
//
const User = require("../../models/Users")

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include a valide email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    //destructur to bring this out of req.body
    const { name, email, password } = req.body
    try {
      //the below will see if user exists
      let user = await User.findOne({ email })

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] })
      }

      //get the user's gravatar
      const avatar = gravatar.url(email, {
        //options
        s: "200", //size
        r: "pg", //rating remove nakedness
        d: "mm", //default image
      })

      //below is not saving the user yet
      user = new User({
        name,
        email,
        avatar,
        password,
      })

      //encrypt the password
      const salt = await bcrypt.genSalt(10) //level of security 10

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      //return the json webtoken (not done yet)
      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //added additional time for development testing
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
      // res.send("User registered");
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server error")
    }

    // console.log(req.body); used to test routes
  }
)

module.exports = router
