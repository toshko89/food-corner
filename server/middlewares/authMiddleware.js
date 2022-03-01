const config = require('../config/config.js');
const authService = require('../services/authService.js');

function authentication(req, res, next) {
  const token = req.cookies[config.COOKIE_NAME];
  if (!token) {
      return next();
  }

  const tokenVerify = authService.verifyToken(token, config.SECRET);

  if (!tokenVerify) {
      res.render('login', { error: 'You are not authorized to view this page, please login/regiter' });
      return next()
  }

  const user = {
      _id: tokenVerify._id,
      username: tokenVerify.username
  }

  req.user = user;
  res.locals.user = user;
  next();
}

function authorization(req, res, next) {

  if (!req.user) {
      return res.render('login', { error: 'You are not authorized to view this page, please login/regiter' });
  }
  next();

};