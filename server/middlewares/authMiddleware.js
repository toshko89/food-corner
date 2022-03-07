const config = require('../config/config.js');
const authService = require('../services/authService.js');

function authentication(req, res, next) {
  const token = req.cookies[config.COOKIE_NAME];
  if (!token) {
    req.user = undefined;
    return next();
  }

  const tokenVerify = authService.verifyToken(token, config.SECRET);

  if (!tokenVerify) {
    res.clearCookie(config.COOKIE_NAME);
    req.user = undefined;
    return next()
  }

  req.user = tokenVerify;
  next();
}

// function authorization(req, res, next) {

//   if (!req.user) {
//     return res.render('login', { error: 'You are not authorized to view this page, please login/regiter' });
//   }
//   next();

// };

module.exports = { authentication }