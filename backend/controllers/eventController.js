const Event = require('../models/eventModel');

// Create event
const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;

  const event = await Event.create({
    title,
    description,
    date,
    location,
    createdBy: req.user.id,
  });

  if (event) {
    res.status(201).json(event);
  } else {
    res.status(400).json({ message: "Invalid event data" });
  }
};

// Get all events
const getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// Get single event
const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

// Update event
const updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    if (event.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
    Object.assign(event, req.body);
    await event.save();
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

// Delete event
const deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    if (event.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }
    await event.deleteOne();
    res.json({ message: "Event deleted" });
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
