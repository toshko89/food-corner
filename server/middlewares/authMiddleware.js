const config = require('../config/config.js');
const authService = require('../services/authService.js');

function authentication(req, res, next) {
  const token = req.cookies[config.COOKIE_NAME];
  if (!token) {
    req.user = undefined;
    return next();
  }

  try {
    const tokenVerify = authService.verifyToken(token, config.SECRET);
    if (!tokenVerify) {
      res.clearCookie(config.COOKIE_NAME);
      req.user = undefined;
      return next()
    }

    const identityVerificationData = { _id: tokenVerify._id, email: tokenVerify.email }
    req.user = identityVerificationData;
    next();

  } catch (error) {
    res.clearCookie(config.COOKIE_NAME);
    res.status(401).send({ message: 'Please log in' });
  }
}

module.exports = { authentication }