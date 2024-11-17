const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
