const router = require('express').Router();
const userController = require('../controllers/userController.js');

router.use('/users',userController);

module.exports = router;