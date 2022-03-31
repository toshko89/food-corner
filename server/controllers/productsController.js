const productsController = require('express').Router();
const formidable = require('formidable');
const { authentication } = require('../middlewares/authMiddleware.js');
const isOwnder = require('../middlewares/isOwnder.js');
const { createProduct, getProductById, deleteProductById, updateProduct } = require('../services/productService.js');
const { getRestaurantByID } = require('../services/restaurantService.js');
const { cloudinaryUpload, cloudinaryDelete } = require('../utils/cloudinary.js');
const formParse = require('../utils/formParse.js');

productsController.post('/:restaurantId/add-product', authentication, isOwnder, async (req, res) => {
  const { restaurantId } = req.params;
  const form = formidable({ multiples: true });
  const imgURL = [];
  try {
    if (!req.user) {
      throw new Error('Please login first');
    }
    const [data, files] = await formParse(req, form);

    const ingredients = data.ingredients.split(',').map(x => x.trim())

    if (data.name.length < 5) {
      throw new Error('Name must be at least 5 characters');
    }
    if (ingredients.length < 3) {
      throw new Error('Product ingredients must be at last 3!');
    }
    if (!data.price) {
      throw new Error('Please add price!');
    }
    if (!data.weight) {
      throw new Error('Please add weight!');
    }
    if (!data.category) {
      throw new Error('Category is required!');
    }

    for (const file of Object.values(files)) {
      const cloudinaryLink = await cloudinaryUpload(file.filepath);
      imgURL.push({ secure_url: cloudinaryLink.secure_url, public_id: cloudinaryLink.public_id });
    }

    if (imgURL.length === 0) {
      throw new Error('At least one image is required!');
    }

    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      img: imgURL[0],
      category: data.category,
      ingredients
    }

    const restaurant = await getRestaurantByID(restaurantId);
    const newProduct = await createProduct(productData);
    restaurant.products.push(newProduct);
    await restaurant.save();
    await newProduct.save();
    res.status(200).send(restaurant);

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
})

productsController.put('/:restaurantId/edit-product/:productId', authentication, isOwnder, async (req, res) => {
  const { restaurantId, productId } = req.params;
  const form = formidable({ multiples: true });
  const imgURL = [];
  try {
    if (!req.user) {
      throw new Error('Please login first');
    }
    const [data, files] = await formParse(req, form);
    const product = await getProductById(productId);

    const ingredients = data.ingredients.split(',').map(x => x.trim())

    if (data.name.length < 5) {
      throw new Error('Name must be at least 5 characters');
    }
    if (ingredients.length < 3) {
      throw new Error('Product ingredients must be at last 3!');
    }
    if (!data.price) {
      throw new Error('Please add price!');
    }
    if (!data.weight) {
      throw new Error('Please add weight!');
    }
    if (!data.category) {
      throw new Error('Category is required!');
    }

    for (const file of Object.values(files)) {
      const cloudinaryLink = await cloudinaryUpload(file.filepath);
      imgURL.push({ secure_url: cloudinaryLink.secure_url, public_id: cloudinaryLink.public_id });
    }

    if (imgURL.length === 0) {
      throw new Error('At least one image is required!');
    }

    await cloudinaryDelete(product.img.public_id);

    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      img: imgURL[0],
      category: data.category,
      ingredients
    }

    await updateProduct(productId, productData)
    const restaurant = await getRestaurantByID(restaurantId);
    res.status(200).send(restaurant)
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
})

productsController.delete('/:restaurantId/delete-product/:productId', authentication, isOwnder, async (req, res) => {
  const { restaurantId, productId } = req.params;
  // const product = await getProductById(productId);
  try {
    const restaurant = await getRestaurantByID(restaurantId);
    const product = restaurant.products.find(x => x._id.toString() === productId);
    await cloudinaryDelete(product.img.public_id);
    restaurant.products = restaurant.products.filter(p => p._id.toString() !== productId);
    await deleteProductById(productId);
    await restaurant.save();
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})


module.exports = productsController;