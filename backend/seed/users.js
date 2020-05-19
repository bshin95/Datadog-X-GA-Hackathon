const db = require("../db")
const User = require("../models/user")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const users = [
    { name: "Benny", email: "benny@hotmail.com" },
    { name: "Joe", email: "joe@hotmail.com" },
    { name: "Sally", email: "sally@hotmail.com" },
    { name: "Jenny", email: "jenny@hotmail.com" },
    { name: "Chris", email: "chris@hotmail.com" },
  ]

  await User.insertMany(users)
  console.log("Created users!")
}

const run = async () => {
  await main()
  db.close()
}

run()
