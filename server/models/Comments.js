const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  name: {
    type: String
  },
  comment: {
    type: String
  },
  rating: {
    type: Number
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  date: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;