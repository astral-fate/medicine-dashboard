import React, { useState } from 'react';
import Medicines from './components/Medicines';
import Categories from './components/Categories';
import Pharmacies from './components/Pharmacies';
import Inventory from './components/Inventory';
import Users from './components/Users';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('medicines');

  const renderContent = () => {
    switch (activeTab) {
      case 'medicines':
        return <Medicines />;
      case 'categories':
        return <Categories />;
      case 'pharmacies':
        return <Pharmacies />;
      case 'inventory':
        return <Inventory />;
      case 'users':
        return <Users />;
      default:
        return <Medicines />; // Default view
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <button onClick={() => setActiveTab('medicines')} className={activeTab === 'medicines' ? 'active' : ''}>
          Medicines
        </button>
        <button onClick={() => setActiveTab('categories')} className={activeTab === 'categories' ? 'active' : ''}>
          Categories
        </button>
        <button onClick={() => setActiveTab('pharmacies')} className={activeTab === 'pharmacies' ? 'active' : ''}>
          Pharmacies
        </button>
        <button onClick={() => setActiveTab('inventory')} className={activeTab === 'inventory' ? 'active' : ''}>
          Inventory
        </button>
        <button onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'active' : ''}>
          Users
        </button>
      </div>

      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;