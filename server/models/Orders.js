const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
  },
  phone: {
    type: Number,
    minlength: [10, 'Your phone should be at least 10 characters'],
    validate: {
      validator: function (v) {
        return /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/i.test(v);
      }
    }
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
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