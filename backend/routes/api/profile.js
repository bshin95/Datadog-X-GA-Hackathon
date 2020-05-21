const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/profiles');
const User = require('../../models/User');

//
router.get('/', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

    } catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;