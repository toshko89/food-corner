const { getRestaurantByID } = require('../services/restaurantService.js')

async function isOwnder(req, res, next) {
  const { restaurantId } = req.params;
  try {
    const restaurant = await getRestaurantByID(restaurantId);
    if (restaurant.owner.toString() !== req.user?._id) {
      throw new Error('Not authorized to edit this restaurant')
    }
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: error.message });
  }
}

module.exports = isOwnder;