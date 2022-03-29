const Products = require('../models/Products.js');

const createProduct = async (product) => Products.create(product);

const getProductById = async (productId) => Products.findById(productId);

const deleteProductById = async (productId) => Products.findByIdAndDelete(productId);

module.exports = {
  createProduct,
  getProductById,
  deleteProductById
}