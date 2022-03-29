const Restaurant = require('../models/Restaurant.js');

const createRestaurant = async (data) => Restaurant.create(data);

const getAllRestaurants = () => Restaurant.find().lean();

const getOwnRestaurants = (userId) => Restaurant.find({ owner: userId }).lean();

const getRestaurantByID = (restaurantId) => Restaurant.findById(restaurantId).populate('products');

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantByID,
  getOwnRestaurants
}