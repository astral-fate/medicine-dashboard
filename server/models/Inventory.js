const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  medicine_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine', required: true },
  pharmacy_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
  quantity: { type: Number, required: true },
  minimum_quantity: { type: Number, required: true },
  status: { type: String, default: 'active' },
  last_updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventory', InventorySchema);