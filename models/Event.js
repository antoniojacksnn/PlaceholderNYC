const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  date: Date,
  // Add more fields as necessary
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
