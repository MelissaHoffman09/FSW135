const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  insert_date: {
      type: Date,
      default: Date.now
  },
  username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min: 8,
      max: 25
  }
})

module.exports = mongoose.model("User", userSchema);