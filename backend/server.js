const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const app = express()
//connect db
connectDB()

//initialize middleware
app.use(express.json({ extended: false }))
app.use(cors({ origin: ['http://localhost:3000', 'https://marvelous-run.surge.sh', 'http://marvelous-run.surge.sh'] }))

app.get("/", (req, res) => res.send("API Running"))

//routes
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/posts", require("./routes/api/posts"))
app.use("/api/profile", require("./routes/api/profile"))
app.use("/", require("./routes/index"))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
