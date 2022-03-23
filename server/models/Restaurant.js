const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be at least 5 characters']
  },
  categorie: {
    type: String,
    required: true,
    minlength: [5, 'Categorie must be at least 5 characters']
  },
  city: {
    type: String,
    required: true,
    minlength: [5, 'City must be at least 5 characters']
  },
  address: {
    type: String,
    required: true,
    minlength: [5, 'Address must be at least 5 characters']
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
    type: {
      secure_url: {
        type: String
      },
      public_id: {
        type: String
      }
    }
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
  },
  ratingsCount: {
    type: Number,
    default: 0
  }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;