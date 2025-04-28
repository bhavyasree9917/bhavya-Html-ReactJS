// src/components/ProductForm.js
import React, { useState } from 'react';

function ProductForm({ onSubmit }) {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    quantity: 0,
    price: 0,
    supplier: '',
    reorderLevel: 0,
    sold: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({
      name: '',
      category: '',
      quantity: 0,
      price: 0,
      supplier: '',
      reorderLevel: 0,
      sold: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for each product property */}
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
