const { getRestaurantByID } = require('../services/restaurantService.js')

async function isOwner(req, res, next) {
  const { restaurantId } = req.params;
  try {
    const restaurant = await getRestaurantByID(restaurantId);
    if (restaurant.owner.toString() !== req.user?._id) {
      throw new Error('Not authorized to edit this restaurant')
    }
    next()
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: error.message });
  }
}

module.exports = isOwner;