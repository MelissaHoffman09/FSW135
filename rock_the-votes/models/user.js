const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const bcrypt = require('bycrypt')

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
      min: 10,
      max: 35
  }
})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isMotdified('password')) return next ()
    bcrypt.hash(user.password,8, (err,hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

/*userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}
userSchema.methods.withoutPassowrd = function(){
    const user = this.toObject()
    delete user.password
    return user */ 
    
module.exports = mongoose.model("User", userSchema);