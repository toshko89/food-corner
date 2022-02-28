const config = require('../config/config.js');
const User = require('../models/User.js');
const authService = require('../services/authService.js');
const emailChecker = require('../utils/emailChecker.js');

const userController = require('express').Router();

userController.post('/register', async (req, res) => {
  try {
    const { email, password, rePass } = req.body;

    if (!emailChecker(email)) {
      throw new Error('Invalid email address!');
    }

    if (password.trim() != rePass.trim()) {
      throw new Error('password doesn\'t match');
    }

    if (password.length < 6) {
      throw new Error('Your password should be at least 6 characters');
    }

    const userCheck = await User.findUser(email);

    if (userCheck) {
      throw new Error('Email is taken, please try again')
    }

    const newUser = await authService.addUser(email, password);
    const token = authService.createToken(newUser);
    res.cookie(config.COOKIE_NAME, token, { httpOnly: true });
    res.status(200).send(newUser);

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})


module.exports = userController;