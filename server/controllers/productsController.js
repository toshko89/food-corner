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
    console.log(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

})


module.exports = productsController;