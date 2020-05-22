const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/Users")
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

///template stared from user route with edits to adjust for authentication
router.post(
  "/",
  [
    check("email", "please include a valide email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //destructur to bring this out of req.body
    const { email, password } = req.body;
    try {
      //the below will see if user exists
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid User Credentials" }] });
      }

      //need to match password.... 1st password is the non-encrypted; user.password is encrypted
      const isMatch = await bcrypt.compare(password, user.password);

      //using the same message as invalid user for security (a hacker won't know if they got the user name correct)
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid User Credentials" }] });
      }

      //return the json webtoken (not done yet)
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //added additional time for development testing
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // res.send("User registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    // console.log(req.body); used to test routes
  }
);

module.exports = router;
