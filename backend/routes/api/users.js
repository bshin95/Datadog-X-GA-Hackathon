const express = require("express");
const router = express.Router();
const gravatar = require("gravatar"); //A Globally Recognized Avatar
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
//
const User = require("../../models/Users");
const controllers = require("../../controllers");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("phone", "Phone number is required").not().isEmpty(),
    check("department", "Department name is required").not().isEmpty(),
    check("hierarchy", "Hierarchy is required").not().isEmpty(),
    check("location", "Office Location name is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("interest_one").optional(),
    check("interest_one_image").optional(),

    check("interest_two").optional(),
    check("interest_two_image").optional(),

    check("interest_three").optional(),
    check("interest_three_image").optional(),

    check("interest_four").optional(),
    check("interest_four_image").optional(),

    check("interest_five").optional(),
    check("interest_five_image").optional(),

    check("facebook_url").optional(),
    check("instagram_url").optional(),
    check("twitter_url").optional(),
    check("linkedin_url").optional(),
    check("youtube_url").optional(),
    check("pinterest_url").optional(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //destructure to bring this out of req.body
    const {
      name,
      email,
      phone,
      department,
      hierarchy,
      location,
      password,
      //below is only done for demo
      interest_one,
      interest_one_image,

      interest_two,
      interest_two_image,

      interest_three,
      interest_three_image,

      interest_four,
      interest_four_image,

      interest_five,
      interest_five_image,

      facebook_url,
      instagram_url,
      twitter_url,
      linkedin_url,
      youtube_url,
      pinterest_url,
    } = req.body;
    try {
      //the below will see if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //get the user's gravatar
      const avatar = gravatar.url(email, {
        //options
        s: "200", //size
        r: "pg", //rating remove nakedness
        d: "mm", //default image
      });

      //below is not saving the user yet
      user = new User({
        name,
        email,
        phone,
        department,
        hierarchy,
        location,
        avatar,
        password,
        //below is only done for demo
        interest_one,
        interest_one_image,

        interest_two,
        interest_two_image,

        interest_three,
        interest_three_image,

        interest_four,
        interest_four_image,

        interest_five,
        interest_five_image,

        facebook_url,
        instagram_url,
        twitter_url,
        linkedin_url,
        youtube_url,
        pinterest_url,
      });

      //encrypt the password
      const salt = await bcrypt.genSalt(10); //level of security 10

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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

router.get("/", controllers.getAllUsers);

router.get("/:id", controllers.getUser);

module.exports = router;
