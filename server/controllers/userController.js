const config = require('../config/config.js');
const { authentication } = require('../middlewares/authMiddleware.js');
const User = require('../models/User.js');
const authService = require('../services/authService.js');
const emailChecker = require('../utils/emailChecker.js');
const passwordRemover = require('../utils/passwordRemover.js');

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
    const userData = passwordRemover(newUser);
    res.cookie(config.COOKIE_NAME, token, { httpOnly: true });
    res.status(200).send(userData);

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
});

userController.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() == '' || password.trim() == '') {
      throw new Error('All fields are required');
    }

    if (!emailChecker(email)) {
      throw new Error('Invalid email format');
    }

    const { token, user } = await authService.login(email, password);
    const userData = passwordRemover(user);
    res.cookie(config.COOKIE_NAME, token, { httpOnly: true });
    res.status(200).send(userData);

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
});

//TODO finish the below:

userController.put('/:id', authentication, async (req, res) => {
    try {
      if(req.user._id !== req.params._id){
        throw new Error('Please loggin/register')
      }

      res.status(200).send('All good')

    } catch (error) {
      res.status(400).send({ message: error.message })
    }
})

userController.get('/logout', (req, res) => {
  res.clearCookie(config.COOKIE_NAME);
  res.status(200).send('Logged out!');
})


module.exports = userController;