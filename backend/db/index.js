// const mongoose = require("mongoose")

// mongoose
//   .connect("mongodb://127.0.0.1:27017/datadogDatabase", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Successfully connected to MongoDB.")
//   })
//   .catch((e) => {
//     console.error("Connection error", e.message)
//   })

// const db = mongoose.connection

// module.exports = db

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 4000
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb://127.0.0.1:27017/datadogDatabase", {
  useNewUrlParser: true,
})
const connection = mongoose.connection
connection.once("open", function () {
  console.log("MongoDB database connection established successfully")
})
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT)
})
