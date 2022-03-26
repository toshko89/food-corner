const productsController = require('express').Router();
const formidable = require('formidable');
const { authentication } = require('../middlewares/authMiddleware.js');
const isOwnder = require('../middlewares/isOwnder.js');
const { cloudinaryUpload } = require('../utils/cloudinary.js');
const formParse = require('../utils/formParse.js');

productsController.post('/:restaurantId/add-product', authentication, isOwnder, async (req, res) => {
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

    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      img: imgURL[0],
      category: data.category,
      ingredients: data.ingredients.split(',').map(x => x.trim())
    }

    if (productData.name < 5) {
      throw new Error('Name must be at least 5 characters');
    }
    if (productData.ingredients < 3) {
      throw new Error('Recipe ingredients must be at last 3!');
    }
    if (!productData.price) {
      throw new Error('Please add price!');
    }
    if (!productData.weight) {
      throw new Error('Please add weight!');
    }
    if (!productData.img) {
      throw new Error('At least one image is required!')
    }
    if (!productData.category) {
      throw new Error('Category is required!');
    }

    console.log(productData);

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

})


module.exports = productsController;