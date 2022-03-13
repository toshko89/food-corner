const restaurantController = require('express').Router();
const formidable = require('formidable');
const { authentication } = require('../middlewares/authMiddleware.js');
const { createRestaurant, getAll, getRestaurantByID } = require('../services/restaurantService.js');
const formParse = require('../utils/formParse.js');


restaurantController.post('/create', authentication, async (req, res) => {
  const form = formidable({ multiples: true });
  try {
    const [data, img] = await formParse(req, form);
    console.log(req.user);
    // console.log(data);
    // console.log(img);
    // const newRes = await createRestaurant(data);
    // console.log(newRes);
  } catch (error) {
    res.status(400).send({ message: error.message });
    console.log(error);
  }
})

restaurantController.get('/', async (req, res) => {
  try {
    const restaurants = await getAllRestaurants();
    res.status(200).send(restaurants);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

restaurantController.get('/:restaurantId', async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try {
    const restaurant = await getRestaurantByID(restaurantId);
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

module.exports = restaurantController;