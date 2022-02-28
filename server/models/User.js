const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config.js');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Name must be at least 3 characters'],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z]+?$/i.test(v);
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)/i.test(v);
      }
    },
    unique: [true, 'Email is taken please choose different one']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Your password should be at least 6 characters'],
  },
  phone: {
    type: Number,
    minlength: [10, 'Your phone should be at least 10 characters'],
    validate: {
      validator: function (v) {
        return /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/i.test(v);
      }
    },
  },
  city: {
    type: String,
  },
  address:{
    type: String,
  }
})

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, config.SALT_ROUNDS)
      .then(hash => {
          this.password = hash;
          next();
      })
      .catch(err => {
          throw new Error(err);
      })
});

userSchema.static('findUser',function(email){
  return this.findOne({email});
});

const User = mongoose.model('User',userSchema);

module.exports = User;

