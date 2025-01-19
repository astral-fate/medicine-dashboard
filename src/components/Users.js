import React, { useState, useEffect } from 'react';
import api from '../api/api';
import '../App.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    phone: '',
    role: 'staff',
    status: 'active'
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await api.getUsers();
      setUsers(usersData);
    } catch (error) {
      setError('Error fetching the data');
    }
  };

  const handleAddUser = async () => {
    try {
      await api.addUser(newUser); // Post to backend
      setShowAddUserModal(false);
      setNewUser({
        username: '',
        password: '',
        phone: '',
        role: 'staff',
        status: 'active'
      });
      fetchData(); // Refresh data after adding
    } catch (error) {
      setError('Error Adding user.');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await api.deleteUser(id);
      fetchData(); // Refresh data after deleting
    } catch (error) {
      setError('Error Deleting user.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="dashboard-content">
      <div className="action-buttons">
        <button onClick={() => setShowAddUserModal(true)} className="add-button">
          Add User
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="data-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{new Date(user.created_at).toLocaleDateString()}</td>
              <td>{user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never'}</td>
              <td className="action-buttons">
                <button className="edit-button">Edit</button>
                <button onClick={() => handleDeleteUser(user._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddUserModal(false)}>&times;</span>
            <h3>Add New User</h3>
            <form>
              <label>Username</label>
              <input type="text" name="username" value={newUser.username} onChange={handleInputChange} />

              <label>Password</label>
              <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />

              <label>Phone</label>
              <input type="text" name="phone" value={newUser.phone} onChange={handleInputChange} />

              <label>Role</label>
              <select name="role" value={newUser.role} onChange={handleInputChange}>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select>

              <label>Status</label>
              <select name="status" value={newUser.status} onChange={handleInputChange}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>

              <button type="button" onClick={handleAddUser} className="add-button">
                Add User
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;