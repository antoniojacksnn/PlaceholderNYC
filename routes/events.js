const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create an Event
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  try {
    const savedEvent = await event.save();
    res.status(201).send(savedEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Additional routes for updating and deleting events would be similar

module.exports = router;
