const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, 'name already exists, please choose different one'],
    minlength: [5, 'Name must be at least 5 characters']
  },
  categorie: {
    type: String,
    required: true,
    minlength: [5, 'Name must be at least 5 characters']
  },
  city: {
    type: String,
    required: true,
    minlength: [3, 'Name must be at least 5 characters']
  },
  address: {
    type: String,
    required: true,
    minlength: [5, 'Name must be at least 5 characters']
  },
  working_hours: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  img: {
    type: String,
  },
  products: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products'
    }],
    default: []
  },
  rating: {
    type: Number,
    default: 0
  }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;