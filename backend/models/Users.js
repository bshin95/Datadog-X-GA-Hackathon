const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  hierarchy: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },

  interest_one: { type: String, required: false },
  interest_one_image: { type: String, required: false },

  interest_two: { type: String, required: false },
  interest_two_image: { type: String, required: false },

  interest_three: { type: String, required: false },
  interest_three_image: { type: String, required: false },

  interest_four: { type: String, required: false },
  interest_four_image: { type: String, required: false },

  interest_five: { type: String, required: false },
  interest_five_image: { type: String, required: false },

  facebook_url: { type: String, required: false },
  instagram_url: { type: String, required: false },
  twitter_url: { type: String, required: false },
  linkedin_url: { type: String, required: false },
  youtube_url: { type: String, required: false },
  pinterest_url: { type: String, required: false },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
