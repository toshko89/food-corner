const Comments = require('../models/Comments.js');

const createComment = (data) => {
  const comment = new Comments(data);
  return comment.save();
}

const getAllRatingsByRestaurantId = (restaurantId) => {
  return Comments.find({ restaurant: restaurantId });
}

module.exports = { createComment, getAllRatingsByRestaurantId }