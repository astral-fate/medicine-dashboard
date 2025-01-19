// categoryController.js
const Category = require('../models/Category');

const getCategories = async (req, res) => {
  try {
    console.log('Getting all categories'); // Debug log
    const categories = await Category.find();
    console.log('Found categories:', categories); // Debug log
    res.json(categories);
  } catch (error) {
    console.error('Error in getCategories:', error);
    res.status(500).json({ message: error.message });
  }
};

const addCategory = async (req, res) => {
  try {
    console.log('Received category data:', req.body); // Debug log
    
    if (!req.body.name || !req.body.description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }

    const newCategory = new Category({
      name: req.body.name,
      description: req.body.description
    });

    const savedCategory = await newCategory.save();
    console.log('Saved category:', savedCategory); // Debug log
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error('Error in addCategory:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCategories, addCategory };