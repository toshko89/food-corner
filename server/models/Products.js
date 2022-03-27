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
    type: {
      secure_url: {
        type: String
      },
      public_id: {
        type: String
      }
    }
  },
  category: {
    type: String
  },
  ingredients: [{
    type: String
  }]
})

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
