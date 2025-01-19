const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true },
});

module.exports = mongoose.model('Medicine', MedicineSchema);