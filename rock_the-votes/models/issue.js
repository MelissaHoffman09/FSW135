  
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
      },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: Sting,
    required: true
  },
  postDate: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Issue", issueSchema)