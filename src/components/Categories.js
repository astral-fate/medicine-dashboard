import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../App.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);



 // Categories.js
const handleAddCategory = async () => {
    try {
      console.log('Attempting to add category:', newCategory); // Debug log
      
      if (!newCategory.name || !newCategory.description) {
        setError('Name and description are required');
        return;
      }
  
      const response = await api.addCategory(newCategory);
      console.log('Category added successfully:', response); // Debug log
      
      setShowAddCategoryModal(false);
      setNewCategory({ name: '', description: '' });
      fetchData();
    } catch (error) {
      console.error('Detailed error:', error.response || error); // More detailed error
      setError(error.response?.data?.message || 'Error adding category. Please check console for details.');
    }
  };
  
  const fetchData = async () => {
    try {
      console.log('Fetching categories...'); // Debug log
      const categoriesData = await api.getCategories();
      console.log('Categories received:', categoriesData); // Debug log
      setCategories(categoriesData);
    } catch (error) {
      console.error('Fetch error details:', error.response || error); // More detailed error
      setError('Error fetching the data: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await api.deleteCategory(id);
      fetchData(); // Refresh data after deleting
    } catch (error) {
      setError('Error Deleting category.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  return (
    <div className="dashboard-content">
      <div className="action-buttons">
        <button onClick={() => setShowAddCategoryModal(true)} className="add-button">
          Add Category
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{new Date(category.created_at).toLocaleDateString()}</td>
              <td className="action-buttons">
                <button className="edit-button">Edit</button>
                <button onClick={() => handleDeleteCategory(category._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddCategoryModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddCategoryModal(false)}>&times;</span>
            <h3>Add New Category</h3>
            <form>
              <label>Category Name</label>
              <input type="text" name="name" value={newCategory.name} onChange={handleInputChange} />

              <label>Description</label>
              <input type="text" name="description" value={newCategory.description} onChange={handleInputChange} />

              <button type="button" onClick={handleAddCategory} className="add-button">
                Add Category
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;