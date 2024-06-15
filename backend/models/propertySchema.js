const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  img:String,
  title: String,
  description: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  nearby: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Property', propertySchema);
