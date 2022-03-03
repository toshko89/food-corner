const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
  },
  img: {
    type: String
  },
  ingredients: []
})

const Products = mongoose.model('Products', productSchema);

model.exports = Products;
