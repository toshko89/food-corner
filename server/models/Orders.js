const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  items: [{
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products'
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

const Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;