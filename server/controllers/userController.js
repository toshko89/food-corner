const userController = require('express').Router();
const config = require('../config/config.js');
const { authentication } = require('../middlewares/authMiddleware.js');
const checkUser = require('../middlewares/checkUser.js');
const User = require('../models/User.js');
const { updateUser } = require('../services/authService.js');
const authService = require('../services/authService.js');
const emailChecker = require('../utils/emailChecker.js');
const passwordRemover = require('../utils/passwordRemover.js');


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
    const { token, user } = authService.createToken(newUser);
    const userData = passwordRemover(user);
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

userController.put('/:id', authentication, async (req, res) => {
  const { userId, userData } = req.body;
  try {
    if (req.user?._id !== req.params?.id) {
      throw new Error('Please loggin/register')
    }

    if (userData.name.length < 3) {
      throw new Error('Name must be at least 3 characters')
    }

    if (userData.phone.length < 8) {
      throw new Error('Your phone should be at least 8 characters')
    }

    const newUserData = await updateUser(userId, userData);
    const userDataWithoutPass = passwordRemover(newUserData);
    res.status(200).send(userDataWithoutPass);

  } catch (error) {
    res.status(400).send({ message: error.message })
  }
})

userController.get('/verify', checkUser, async (req, res) => {
  try {
    let userData = {}
    if (req.user) {
      userData = passwordRemover(req.user);
    }
    res.status(200).send(userData)
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
})

userController.get('/logout', (req, res) => {
  res.clearCookie(config.COOKIE_NAME);
  res.status(200).send('Logged out!');
})


module.exports = userController;