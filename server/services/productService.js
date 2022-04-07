const Products = require('../models/Products.js');

const createProduct = async (product) => Products.create(product);

const getProductById = async (productId) => Products.findById(productId);

const deleteProductById = async (productId) => Products.findByIdAndDelete(productId);

const getAllProducts = async (arr) => Products.find({ _id: { $in: arr } });

const updateProduct = async (productId, productData) =>
  Products.findByIdAndUpdate(productId, productData, { returnDocument: 'after', runValidators: true })

module.exports = {
  createProduct,
  updateProduct,
  getProductById,
  deleteProductById,
  getAllProducts
}