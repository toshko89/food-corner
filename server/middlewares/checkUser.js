const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
const { createToken, getUserById } = require('../services/authService.js');

async function checkUser(req, res, next) {
    const reqToken = req.cookies[config.COOKIE_NAME];
    try {
        const decoded = jwt.verify(reqToken, config.SECRET);
        const user = await getUserById(decoded._id);
        const { token } = createToken(user);
        res.cookie(config.COOKIE_NAME, token, { httpOnly: true });
        req.user = user;
        next();
    } catch (error) {
        req.user = undefined;
        next();
    }
}

module.exports = checkUser;