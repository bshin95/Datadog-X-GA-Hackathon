const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Profile = new Schema(
  {
    
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
  },
  { timestamps: true }
)

module.exports = mongoose.model("profiles", Profile)
