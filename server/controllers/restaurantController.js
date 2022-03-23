const restaurantController = require('express').Router();
const formidable = require('formidable');
const config = require('../config/config.js');
const { authentication } = require('../middlewares/authMiddleware.js');
const { createRestaurant, getRestaurantByID, getOwnRestaurants, getAllRestaurants } = require('../services/restaurantService.js');
const { cloudinaryUpload } = require('../utils/cloudinary.js');
const formParse = require('../utils/formParse.js');


restaurantController.get('/', async (req, res) => {
  try {
    const restaurants = await getAllRestaurants();
    res.status(200).send(restaurants);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

restaurantController.post('/create', authentication, async (req, res) => {

  console.log(config);

  console.log();

  const form = formidable({ multiples: true });
  const imgURL = [];
  try {
    if (!req.user) {
      throw new Error('Please login first');
    }
    const [data, files] = await formParse(req, form);

    for (const file of Object.values(files)) {
      const cloudinaryLink = await cloudinaryUpload(file.filepath);
      imgURL.push({ secure_url: cloudinaryLink.secure_url, public_id: cloudinaryLink.public_id });
    }

    const restaurantData = {
      name: data.name,
      address: data.address,
      categorie: data.categorie,
      city: data.city,
      working_hours: data.workingHours,
      owner: data.OwnerID,
      img: imgURL[0]
    }

    if (restaurantData.name.length < 5) {
      throw new Error('Name must be at least 5 characters');
    }
    if (restaurantData.address.length < 5) {
      throw new Error('Address must be at least 5 characters');
    }
    if (restaurantData.categorie.length < 5) {
      throw new Error('Categorie must be at least 5 characters');
    }
    if (restaurantData.city.length < 5) {
      throw new Error('City must be at least 5 characters');
    }
    if (restaurantData.address.length < 5) {
      throw new Error('Address must be at least 5 characters');
    }

    const newResstaurant = await createRestaurant(restaurantData);
    res.status(200).send(newResstaurant);

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
})

restaurantController.get('/by-owner', authentication, async (req, res) => {
  try {
    if (!req.user) {
      throw new Error('Please login first');
    }
    const restaurants = await getOwnRestaurants(req.user._id);
    res.status(200).send(restaurants);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

restaurantController.get('/:id', async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const restaurant = await getRestaurantByID(restaurantId);
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

module.exports = restaurantController;