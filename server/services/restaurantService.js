const Restaurant = require('../models/Restaurant.js');

const createRestaurant = async (data) => Restaurant.create(data);

const getAllRestaurants = () => Restaurant.find().lean();

const getOwnRestaurants = (userId) => Restaurant.find({ owner: userId }).lean();

const getRestaurantByID = (restaurantId) => Restaurant.findById(restaurantId).populate('products');

const deleteRestaurantById = (restaurantId) => Restaurant.findByIdAndDelete(restaurantId);

const updateRestaurant = (restaurantId, data) =>
  Restaurant.findByIdAndUpdate(restaurantId, data, { returnDocument: 'after', runValidators: true });

const getFavoriteRestaurants = (favArr) => Restaurant.find({ _id: { $in: favArr } }).lean();

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantByID,
  getOwnRestaurants,
  updateRestaurant,
  deleteRestaurantById,
  getFavoriteRestaurants
}