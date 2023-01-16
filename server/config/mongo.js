const mongoose = require('mongoose');
const config = require('./config.js');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(config.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const db = mongoose.connection;

    db.on('error', (err) => {
      console.log('connection error: ' + err.message);
      reject(err);
    })

    db.on('open', () => {
      console.log('DB connected!');
      resolve();
    })
  })
}