const {Schema, model} = require("mongoose")
const mongoose = require("mongoose")

///////////////////////////////
// User Schema for Authentication
////////////////////////////////
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },
         
  })
  
  const User = model("user", userSchema)

  module.exports = User