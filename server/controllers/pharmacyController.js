const Pharmacy = require('../models/Pharmacy');

// Get all pharmacies
const getPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new pharmacy
const addPharmacy = async (req, res) => {
  const { name, location, phone, email, address, city, status } = req.body;

  try {
    const newPharmacy = new Pharmacy({ name, location, phone, email, address, city, status });
    await newPharmacy.save();
    res.status(201).json(newPharmacy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a pharmacy
const updatePharmacy = async (req, res) => {
  const { id } = req.params;
  const { name, location, phone, email, address, city, status } = req.body;

  try {
    const updatedPharmacy = await Pharmacy.findByIdAndUpdate(
      id,
      { name, location, phone, email, address, city, status },
      { new: true }
    );
    res.json(updatedPharmacy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a pharmacy
const deletePharmacy = async (req, res) => {
  const { id } = req.params;

  try {
    await Pharmacy.findByIdAndDelete(id);
    res.json({ message: 'Pharmacy deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPharmacies, addPharmacy, updatePharmacy, deletePharmacy };