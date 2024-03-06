const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: { // Store hashed passwords only
    type: String,
    required: true
  },
  // Add more fields as necessary
});

const User = mongoose.model('User', userSchema);

module.exports = User;
