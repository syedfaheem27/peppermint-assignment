const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    minLength: [5, "The username length should atleast be 5"],
    maxlength: [20, "The username can atmost have 20 characters"],
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
