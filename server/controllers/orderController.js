const orderController = require('express').Router();
const { authentication } = require('../middlewares/authMiddleware.js');
const Orders = require('../models/Orders.js');
const { getAllProducts } = require('../services/productService.js');

orderController.post('/create', authentication, async (req, res) => {
  try {
    const user = req.body.user;
    const orders = req.body.orders;
    const ids = orders.map(order => order.product._id);
    const products = await getAllProducts(ids);
    const order = await Orders.create({
      user: user._id,
      restaurant: orders[0].restaurantId,
      items: orders.map(item => {
        return Object.assign({}, {
          item: products.find(product => product._id.toString() === item.product._id.toString())._id,
          quantity: item.quantity,
          price: item.product.price * item.quantity
        })

      })
    });
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

orderController.get('/:userId', authentication, async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Orders.find({ user: userId }).populate('items.item').populate('restaurant');
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

module.exports = orderController;