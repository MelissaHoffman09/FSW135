const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Issue Schema
const issueSchema = new Schema({
    description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)