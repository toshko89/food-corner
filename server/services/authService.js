const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const config = require('../config/config.js');

const addUser = (email, password) => {
  const user = new User({ email, password });
  return user.save();
};

const updateUser = (userId, userData) =>
  User.findByIdAndUpdate(userId, userData, { returnDocument: 'after', runValidators: true })


async function login(email, password) {
  const user = await User.findUser(email);

  if (!user) {
    throw new Error('Wrong username or password');
  }

  const passwordVerify = await bcrypt.compare(password, user.password);

  if (!passwordVerify) {
    throw new Error('Wrong username or password');
  }

  return createToken(user);
}

function createToken(user) {
  const token = jwt.sign({ _id: user._id, email: user.email }, config.SECRET, { expiresIn: '1h' });
  return {
    token,
    user
  };
};

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const authService = {
  addUser,
  login,
  updateUser,
  createToken,
  verifyToken
}

module.exports = authService;