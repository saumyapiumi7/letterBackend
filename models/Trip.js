const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, default: 0 },
  activities: [{ type: String }],
});

module.exports = mongoose.model('Trip', TripSchema);
