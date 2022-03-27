const Products = require('../models/Products.js');

const createProduct = async (product) => Products.create(product);

module.exports = {
  createProduct
}