const orderController = require('express').Router();
const { authentication } = require('../middlewares/authMiddleware.js');
const Orders = require('../models/Orders.js');

orderController.post('/create', authentication, async (req, res) => {
  try {
    const user = req.body.user;
    const orders = req.body.orders;
    const order = await Orders.create({
      user: user._id,
      restaurant: orders[0].restaurantId,
      products: orders.map(item => {
        return {
          id: item.product._id,
          quantity: item.quantity,
          price: item.product.price * item.quantity
        }
      })
    });
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
})

module.exports = orderController;