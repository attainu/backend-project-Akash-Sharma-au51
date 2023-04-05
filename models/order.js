const mongoose = require('mongoose')
const itemschema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  qty:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true,
  },
  description:{
    type:String,
    required:true,
  }
})
const inventory = module.exports('order',itemschema)
module.exports = inventory
