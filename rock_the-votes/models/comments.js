const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Comment Schema
const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true,
    },
    parent_comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true
    },
    comment_txt: {
        type: String,
        required: true
    },
    insert_date: {
        type: Date,
        default: Date.now
    }
  });

module.exports = mongoose.model("Comments", commentSchema);