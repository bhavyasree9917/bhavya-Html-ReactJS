// src/components/Dashboard.js
import React from 'react';

function Dashboard({ inventory }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Inventory Value {inventory.totalInventoryValue}</p>
      <p>Low Stock Products {inventory.lowStockProducts.length}</p>
      <p>Categories {inventory.categories.length}</p>
      <p>Most Sold Products {inventory.mostSoldProducts.map(p => p.name).join(', ')}</p>
    </div>
    
  );
}

export default Dashboard;
