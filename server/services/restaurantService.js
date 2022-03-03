const Restaurant = require('../models/Restaurant.js');

const createRestaurant = async (data) => {
  const restaurant = new Restaurant(data);
  return restaurant.save();
};

const getAllRestaurants = async () => Restaurant.find().lean();

const getRestaurantByID = async (restaurantId) => Restaurant.findById(restaurantId).lean()

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantByID
}