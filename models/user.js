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

    isSeller: {
      type: Boolean,
      required: true,
    },

    sellerName: {
      type: String,
      required: false,
      unique: true
    },
    
    email: {
      type: String,
      required: false,
      unique: true
    },

    phoneNumber: {
      type: Number,
      required: false
    },

    password: {
      type: String,
      required: true
    },
         
  })
  
  const User = model("user", userSchema)

  module.exports = User