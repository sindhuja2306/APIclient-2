// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  description: String,
  price: {
    type: Number,
    required: [true, 'Price is required']
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;