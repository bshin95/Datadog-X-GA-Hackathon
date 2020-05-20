const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const db = require("../db")

const User = require("../models/user")
const Profile = require("../models/profiles")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

//create user profile
//save user profile
//push profile to current logged in user id

const createProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    const profile = await new Profile(req.body)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createProfile,
  getAllUsers,
}
