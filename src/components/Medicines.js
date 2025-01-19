import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../App.css';

function Medicines() {
  const [medicines, setMedicines] = useState([]);
  const [showAddMedicineModal, setShowAddMedicineModal] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    manufacturer: ''
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const medicinesData = await api.getMedicines();
      const categoriesData = await api.getCategories();
      setMedicines(medicinesData);
      setCategories(categoriesData);
    } catch (error) {
      setError('Error fetching the data');
    }
  };

  const handleAddMedicine = async () => {
    try {
      await api.addMedicine(newMedicine); // Post to backend
      setShowAddMedicineModal(false);
      setNewMedicine({ name: '', category: '', description: '', price: '', manufacturer: '' });
      fetchData(); // Refresh data after adding
    } catch (error) {
      setError('Error Adding medicine.');
    }
  };

  const handleDeleteMedicine = async (id) => {
    try {
      await api.deleteMedicine(id);
      fetchData(); // Refresh data after deleting
    } catch (error) {
      setError('Error Deleting medicine.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMedicine({ ...newMedicine, [name]: value });
  };

  return (
    <div className="dashboard-content">
      <div className="action-buttons">
        <button onClick={() => setShowAddMedicineModal(true)} className="add-button">
          Add Medicine
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Manufacturer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine._id}>
              <td>{medicine.name}</td>
              <td>{medicine.category}</td>
              <td>${medicine.price}</td>
              <td>{medicine.manufacturer}</td>
              <td className="action-buttons">
                <button className="edit-button">Edit</button>
                <button onClick={() => handleDeleteMedicine(medicine._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddMedicineModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddMedicineModal(false)}>&times;</span>
            <h3>Add New Medicine</h3>
            <form>
              <label>Medicine Name</label>
              <input type="text" name="name" value={newMedicine.name} onChange={handleInputChange} />

              <label>Select Category</label>
              <select name="category" value={newMedicine.category} onChange={handleInputChange}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>{category.name}</option>
                ))}
              </select>

              <label>Description</label>
              <input type="text" name="description" value={newMedicine.description} onChange={handleInputChange} />

              <label>Price</label>
              <input type="text" name="price" value={newMedicine.price} onChange={handleInputChange} />

              <label>Manufacturer</label>
              <input type="text" name="manufacturer" value={newMedicine.manufacturer} onChange={handleInputChange} />

              <button type="button" onClick={handleAddMedicine} className="add-button">
                Add Medicine
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Medicines;