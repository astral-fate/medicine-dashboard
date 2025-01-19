const Inventory = require('../models/Inventory');

// Get all inventory items
const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find().populate('medicine_id').populate('pharmacy_id');
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new inventory item
const addInventory = async (req, res) => {
  const { medicine_id, pharmacy_id, quantity, minimum_quantity } = req.body;

  try {
    const newInventory = new Inventory({ medicine_id, pharmacy_id, quantity, minimum_quantity });
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an inventory item
const updateInventory = async (req, res) => {
  const { id } = req.params;
  const { medicine_id, pharmacy_id, quantity, minimum_quantity } = req.body;

  try {
    const updatedInventory = await Inventory.findByIdAndUpdate(
      id,
      { medicine_id, pharmacy_id, quantity, minimum_quantity },
      { new: true }
    );
    res.json(updatedInventory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an inventory item
const deleteInventory = async (req, res) => {
  const { id } = req.params;

  try {
    await Inventory.findByIdAndDelete(id);
    res.json({ message: 'Inventory item deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getInventory, addInventory, updateInventory, deleteInventory };