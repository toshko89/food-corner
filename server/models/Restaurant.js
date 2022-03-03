const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  img: {
    type: String,
    required: true,
  },
  products: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Products'
  }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

model.exports = Restaurant;