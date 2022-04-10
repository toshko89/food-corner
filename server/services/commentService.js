const Comments = require('../models/Comments.js');

const createComment = (data) => {
  const comment = new Comments(data);
  return comment.save();
}

const getAllRatingsByRestaurantId = (restaurantId) => {
  return Comments.find({ restaurant: restaurantId });
}

const deleteCommentById = (commentId) => Comments.findByIdAndDelete(commentId);

const editCommentById = (commentId, data) => Comments.findByIdAndUpdate(commentId, data, { returnDocument: 'after', runValidators: true });

module.exports = { createComment, getAllRatingsByRestaurantId, deleteCommentById, editCommentById };