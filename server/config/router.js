const router = require('express').Router();
const userController = require('../controllers/userController.js');

router.use('/users',userController);
router.use('/restaurants', restaurantController);

module.exports = router;