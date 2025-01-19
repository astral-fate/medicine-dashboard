const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'staff' },
  status: { type: String, default: 'active' },
  created_at: { type: Date, default: Date.now },
  last_login: { type: Date },
});

module.exports = mongoose.model('User', UserSchema);