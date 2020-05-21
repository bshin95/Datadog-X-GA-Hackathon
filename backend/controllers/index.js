const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const db = require("../db")

const User = require("../models/user")
const Profile = require("../models/profiles")

const Fact = require("../models/facts")

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

// const createFacts = async (req, res) => {
//   console.log("creating fact about user")
//   try {
//     const fact = await new Fact(req.body)
//     await fact.save()
//     return res.status(201).json(fact)
//   } catch (error) {
//     console.log(error)
//     return res.status(500).json({ error: error.message })
//   }
// }

const createFacts = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    const fact = await new Fact(req.body)
    await fact.save()
    await user.fact.push(fact.id)
    await user.save()
    console.log(user)
    return res.status(201).json(fact)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getFactsFromUser = async (req, res) => {
  try {
    const { user_id } = req.params
    const facts = await Fact.find({ user_id: user_id })
    if (facts) {
      return res.status(200).json({ facts })
    }
    return res.status(404).send("User with this ID does not exist")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getFactByUserId = async (req, res) => {
  try {
    const { user_id, fact_id } = req.params
    const fact = await fact.findOne({ user_id: user_id, _id: fact_id })
    if (item) {
      return res.status(200).json({ fact })
    }
    return res.status(404).send("Facts with specified ID does not exist")
  } catch (error) {
    return res.status(404).send("Facts with specified ID does not exist.")
  }
}

module.exports = {
  createProfile,
  getAllUsers,
  createFacts,
  getFactsFromUser,
  getFactByUserId,
}
