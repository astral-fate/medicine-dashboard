const Medicine = require('../models/Medicine');

// Get all medicines
const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new medicine
const addMedicine = async (req, res) => {
  const { name, category, description, price, manufacturer } = req.body;

  try {
    const newMedicine = new Medicine({ name, category, description, price, manufacturer });
    await newMedicine.save();
    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a medicine
const updateMedicine = async (req, res) => {
  const { id } = req.params;
  const { name, category, description, price, manufacturer } = req.body;

  try {
    const updatedMedicine = await Medicine.findByIdAndUpdate(
      id,
      { name, category, description, price, manufacturer },
      { new: true }
    );
    res.json(updatedMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a medicine
const deleteMedicine = async (req, res) => {
  const { id } = req.params;

  try {
    await Medicine.findByIdAndDelete(id);
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getMedicines, addMedicine, updateMedicine, deleteMedicine };