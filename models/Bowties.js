var mongoose = require('mongoose');

var Bowties = new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  material:String,
  pattern: String,
  style: String,
  img_url: String,
  retail_price: Number,
  description: String,

})

module.exports = mongoose.model('Bowties', Bowties)
