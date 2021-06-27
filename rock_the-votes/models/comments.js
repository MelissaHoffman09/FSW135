const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
      },
    comment: {
      type: String,
      required: true,
    },
    postDate: {
      type: Date,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    }
  });

module.exports = mongoose.model("Comments", commentSchema);