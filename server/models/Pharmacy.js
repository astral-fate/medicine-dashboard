const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  status: { type: String, default: 'active' },
});

module.exports = mongoose.model('Pharmacy', PharmacySchema);