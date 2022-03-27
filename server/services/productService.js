const Products = require('../models/Products.js');

const createProduct = async (product) => Products.create(product);

const getProductById = async (productId) => Products.findById(productId);

module.exports = {
  createProduct,
  getProductById
}