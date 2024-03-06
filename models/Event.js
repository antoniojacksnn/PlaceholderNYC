const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  date: Date,
  // Consider adding a reference to the User model if needed
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
