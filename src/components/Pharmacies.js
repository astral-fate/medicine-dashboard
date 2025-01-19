import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../App.css';

function Pharmacies() {
  const [pharmacies, setPharmacies] = useState([]);
  const [showAddPharmacyModal, setShowAddPharmacyModal] = useState(false);
  const [newPharmacy, setNewPharmacy] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    status: 'active'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pharmaciesData = await api.getPharmacies();
      setPharmacies(pharmaciesData);
    } catch (error) {
      setError('Error fetching the data');
    }
  };

  const handleAddPharmacy = async () => {
    try {
      await api.addPharmacy(newPharmacy); // Post to backend
      setShowAddPharmacyModal(false);
      setNewPharmacy({
        name: '',
        location: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        status: 'active'
      });
      fetchData(); // Refresh data after adding
    } catch (error) {
      setError('Error Adding pharmacy.');
    }
  };

  const handleDeletePharmacy = async (id) => {
    try {
      await api.deletePharmacy(id);
      fetchData(); // Refresh data after deleting
    } catch (error) {
      setError('Error Deleting pharmacy.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPharmacy({ ...newPharmacy, [name]: value });
  };

  return (
    <div className="dashboard-content">
      <div className="action-buttons">
        <button onClick={() => setShowAddPharmacyModal(true)} className="add-button">
          Add Pharmacy
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy) => (
            <tr key={pharmacy._id}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.location}</td>
              <td>{pharmacy.phone}</td>
              <td>{pharmacy.email}</td>
              <td>{pharmacy.status}</td>
              <td className="action-buttons">
                <button className="edit-button">Edit</button>
                <button onClick={() => handleDeletePharmacy(pharmacy._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddPharmacyModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddPharmacyModal(false)}>&times;</span>
            <h3>Add New Pharmacy</h3>
            <form>
              <label>Pharmacy Name</label>
              <input type="text" name="name" value={newPharmacy.name} onChange={handleInputChange} />

              <label>Location</label>
              <input type="text" name="location" value={newPharmacy.location} onChange={handleInputChange} />

              <label>Phone</label>
              <input type="text" name="phone" value={newPharmacy.phone} onChange={handleInputChange} />

              <label>Email</label>
              <input type="email" name="email" value={newPharmacy.email} onChange={handleInputChange} />

              <label>Address</label>
              <input type="text" name="address" value={newPharmacy.address} onChange={handleInputChange} />

              <label>City</label>
              <input type="text" name="city" value={newPharmacy.city} onChange={handleInputChange} />

              <label>Status</label>
              <select name="status" value={newPharmacy.status} onChange={handleInputChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button type="button" onClick={handleAddPharmacy} className="add-button">
                Add Pharmacy
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pharmacies;