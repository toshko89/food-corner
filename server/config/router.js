const router = require('express').Router();
const orderController = require('../controllers/orderController.js');
const productsController = require('../controllers/productsController.js');
const restaurantController = require('../controllers/restaurantController.js');
const userController = require('../controllers/userController.js');

router.use('/users', userController);
router.use('/restaurants', restaurantController);
router.use('/products', productsController);
router.use('/orders', orderController);

module.exports = router;