const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose"); 


const userSchema = new Schema({
  email: String,
  username: String,
  password: String,
  title: String,
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
userSchema.plugin(passportLocalMongoose);  


module.exports = User;