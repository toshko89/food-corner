const productsController = require('express').Router();
const formidable = require('formidable');

productsController.post('/:restaurantId/add-product', (req, res) => {
  console.log(req.params);
})


module.exports = productsController;