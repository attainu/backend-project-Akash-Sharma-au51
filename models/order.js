const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

// create schema
const orderschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ''
  },

});
 
module.exports = mongoose.model(order,orderschema);
