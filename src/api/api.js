import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

// Define the API object
const api = {
  // Categories
  getCategories: async () => {
    try {
      console.log('Making GET request to:', `${API_BASE_URL}/categories`);
      const response = await axios.get(`${API_BASE_URL}/categories`);
      console.log('Categories response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error.response || error);
      throw error;
    }
  },

  addCategory: async (categoryData) => {
    try {
      console.log('Making POST request to:', `${API_BASE_URL}/categories`);
      console.log('With data:', categoryData);
      const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
      console.log('Add category response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding category:', error.response || error);
      throw error;
    }
  },

  updateCategory: async (id, categoryData) => {
    try {
      console.log(`Making PUT request to: ${API_BASE_URL}/categories/${id}`);
      console.log('With data:', categoryData);
      const response = await axios.put(`${API_BASE_URL}/categories/${id}`, categoryData);
      console.log('Update category response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating category:', error.response || error);
      throw error;
    }
  },

  deleteCategory: async (id) => {
    try {
      console.log(`Making DELETE request to: ${API_BASE_URL}/categories/${id}`);
      const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);
      console.log('Delete category response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting category:', error.response || error);
      throw error;
    }
  },

  // Medicines
  getMedicines: async () => {
    try {
      console.log('Making GET request to:', `${API_BASE_URL}/medicines`);
      const response = await axios.get(`${API_BASE_URL}/medicines`);
      console.log('Medicines response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching medicines:', error.response || error);
      throw error;
    }
  },

  addMedicine: async (medicineData) => {
    try {
      console.log('Making POST request to:', `${API_BASE_URL}/medicines`);
      console.log('With data:', medicineData);
      const response = await axios.post(`${API_BASE_URL}/medicines`, medicineData);
      console.log('Add medicine response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding medicine:', error.response || error);
      throw error;
    }
  },

  updateMedicine: async (id, medicineData) => {
    try {
      console.log(`Making PUT request to: ${API_BASE_URL}/medicines/${id}`);
      console.log('With data:', medicineData);
      const response = await axios.put(`${API_BASE_URL}/medicines/${id}`, medicineData);
      console.log('Update medicine response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating medicine:', error.response || error);
      throw error;
    }
  },

  deleteMedicine: async (id) => {
    try {
      console.log(`Making DELETE request to: ${API_BASE_URL}/medicines/${id}`);
      const response = await axios.delete(`${API_BASE_URL}/medicines/${id}`);
      console.log('Delete medicine response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting medicine:', error.response || error);
      throw error;
    }
  },

  // Pharmacies
  getPharmacies: async () => {
    try {
      console.log('Making GET request to:', `${API_BASE_URL}/pharmacies`);
      const response = await axios.get(`${API_BASE_URL}/pharmacies`);
      console.log('Pharmacies response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching pharmacies:', error.response || error);
      throw error;
    }
  },

  addPharmacy: async (pharmacyData) => {
    try {
      console.log('Making POST request to:', `${API_BASE_URL}/pharmacies`);
      console.log('With data:', pharmacyData);
      const response = await axios.post(`${API_BASE_URL}/pharmacies`, pharmacyData);
      console.log('Add pharmacy response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding pharmacy:', error.response || error);
      throw error;
    }
  },

  updatePharmacy: async (id, pharmacyData) => {
    try {
      console.log(`Making PUT request to: ${API_BASE_URL}/pharmacies/${id}`);
      console.log('With data:', pharmacyData);
      const response = await axios.put(`${API_BASE_URL}/pharmacies/${id}`, pharmacyData);
      console.log('Update pharmacy response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating pharmacy:', error.response || error);
      throw error;
    }
  },

  deletePharmacy: async (id) => {
    try {
      console.log(`Making DELETE request to: ${API_BASE_URL}/pharmacies/${id}`);
      const response = await axios.delete(`${API_BASE_URL}/pharmacies/${id}`);
      console.log('Delete pharmacy response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting pharmacy:', error.response || error);
      throw error;
    }
  },

  // Inventory
  getInventory: async () => {
    try {
      console.log('Making GET request to:', `${API_BASE_URL}/inventory`);
      const response = await axios.get(`${API_BASE_URL}/inventory`);
      console.log('Inventory response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching inventory:', error.response || error);
      throw error;
    }
  },

  addInventory: async (inventoryData) => {
    try {
      console.log('Making POST request to:', `${API_BASE_URL}/inventory`);
      console.log('With data:', inventoryData);
      const response = await axios.post(`${API_BASE_URL}/inventory`, inventoryData);
      console.log('Add inventory response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding inventory:', error.response || error);
      throw error;
    }
  },

  updateInventory: async (id, inventoryData) => {
    try {
      console.log(`Making PUT request to: ${API_BASE_URL}/inventory/${id}`);
      console.log('With data:', inventoryData);
      const response = await axios.put(`${API_BASE_URL}/inventory/${id}`, inventoryData);
      console.log('Update inventory response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating inventory:', error.response || error);
      throw error;
    }
  },

  deleteInventory: async (id) => {
    try {
      console.log(`Making DELETE request to: ${API_BASE_URL}/inventory/${id}`);
      const response = await axios.delete(`${API_BASE_URL}/inventory/${id}`);
      console.log('Delete inventory response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting inventory:', error.response || error);
      throw error;
    }
  },

  // Users
  getUsers: async () => {
    try {
      console.log('Making GET request to:', `${API_BASE_URL}/users`);
      const response = await axios.get(`${API_BASE_URL}/users`);
      console.log('Users response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.response || error);
      throw error;
    }
  },

  addUser: async (userData) => {
    try {
      console.log('Making POST request to:', `${API_BASE_URL}/users`);
      console.log('With data:', userData);
      const response = await axios.post(`${API_BASE_URL}/users`, userData);
      console.log('Add user response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding user:', error.response || error);
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    try {
      console.log(`Making PUT request to: ${API_BASE_URL}/users/${id}`);
      console.log('With data:', userData);
      const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
      console.log('Update user response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error.response || error);
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      console.log(`Making DELETE request to: ${API_BASE_URL}/users/${id}`);
      const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
      console.log('Delete user response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error.response || error);
      throw error;
    }
  }
};

export default api;