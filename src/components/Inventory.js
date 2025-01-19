import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../App.css';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [showAddInventoryModal, setShowAddInventoryModal] = useState(false);
  const [newInventory, setNewInventory] = useState({
    medicine_id: '',
    pharmacy_id: '',
    quantity: '',
    minimum_quantity: ''
  });
  const [medicines, setMedicines] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const inventoryData = await api.getInventory();
      const medicinesData = await api.getMedicines();
      const pharmaciesData = await api.getPharmacies();
      setInventory(inventoryData);
      setMedicines(medicinesData);
      setPharmacies(pharmaciesData);
    } catch (error) {
      setError('Error fetching the data');
    }
  };

  const handleAddInventory = async () => {
    try {
      await api.addInventory(newInventory); // Post to backend
      setShowAddInventoryModal(false);
      setNewInventory({
        medicine_id: '',
        pharmacy_id: '',
        quantity: '',
        minimum_quantity: ''
      });
      fetchData(); // Refresh data after adding
    } catch (error) {
      setError('Error Adding inventory.');
    }
  };

  const handleDeleteInventory = async (id) => {
    try {
      await api.deleteInventory(id);
      fetchData(); // Refresh data after deleting
    } catch (error) {
      setError('Error Deleting inventory.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewInventory({ ...newInventory, [name]: value });
  };

  return (
    <div className="dashboard-content">
      <div className="action-buttons">
        <button onClick={() => setShowAddInventoryModal(true)} className="add-button">
          Add Inventory
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Pharmacy</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => {
            const medicineName = medicines.find((medicine) => medicine._id === item.medicine_id)?.name || 'Unknown';
            const pharmacyName = pharmacies.find((pharmacy) => pharmacy._id === item.pharmacy_id)?.name || 'Unknown';

            return (
              <tr key={item._id}>
                <td>{medicineName}</td>
                <td>{pharmacyName}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>{new Date(item.last_updated).toLocaleDateString()}</td>
                <td className="action-buttons">
                  <button className="edit-button">Edit</button>
                  <button onClick={() => handleDeleteInventory(item._id)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showAddInventoryModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddInventoryModal(false)}>&times;</span>
            <h3>Add New Inventory</h3>
            <form>
              <label>Select Medicine</label>
              <select name="medicine_id" value={newInventory.medicine_id} onChange={handleInputChange}>
                <option value="">Select Medicine</option>
                {medicines.map((medicine) => (
                  <option key={medicine._id} value={medicine._id}>
                    {medicine.name}
                  </option>
                ))}
              </select>

              <label>Select Pharmacy</label>
              <select name="pharmacy_id" value={newInventory.pharmacy_id} onChange={handleInputChange}>
                <option value="">Select Pharmacy</option>
                {pharmacies.map((pharmacy) => (
                  <option key={pharmacy._id} value={pharmacy._id}>
                    {pharmacy.name}
                  </option>
                ))}
              </select>

              <label>Quantity</label>
              <input type="number" name="quantity" value={newInventory.quantity} onChange={handleInputChange} />

              <label>Minimum Quantity</label>
              <input type="number" name="minimum_quantity" value={newInventory.minimum_quantity} onChange={handleInputChange} />

              <button type="button" onClick={handleAddInventory} className="add-button">
                Add Inventory
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;