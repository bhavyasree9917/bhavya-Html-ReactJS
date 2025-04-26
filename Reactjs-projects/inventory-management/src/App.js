
import React, { useState } from 'react';
import './index.css';  
import Inventory from './Inventory';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import Dashboard from './Components/Dashboard';

function App() {
  const [inventory] = useState(new Inventory());
  const [products, setProducts] = useState([]);

  const refresh = () => {
    setProducts([...inventory.products]); 
  };

  const handleAddProduct = (product) => {
    inventory.addProduct(product);
    refresh();
  };

  
  const handleRemoveProduct = (productName) => {
    inventory.removeProduct(productName);
    refresh();
  };

  const handleUpdateQuantity = (productName, quantity) => {
    inventory.updateQuantity(productName, quantity);
    refresh();
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <ProductForm onSubmit={handleAddProduct} />
      <Dashboard inventory={inventory} />
      <ProductList
        products={products}
        onRemove={handleRemoveProduct}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}

export default App;
