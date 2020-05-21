const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Fact = new Schema(
  {
    interest_one: { type: String, required: true },
    interest_two: { type: String, required: true },
    interest_three: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
)

module.exports = mongoose.model("facts", Fact)
