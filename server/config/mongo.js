const mongoose = require('mongoose');
const config = require('./config.js');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect("mongodb+srv://TodorPetkov:gooddevil89@cluster0.j7i3cmi.mongodb.net/?retryWrites=true&w=majority", {
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