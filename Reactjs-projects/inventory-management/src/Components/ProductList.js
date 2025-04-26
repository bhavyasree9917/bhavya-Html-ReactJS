// src/components/ProductList.js
import React from 'react';

function ProductList({ products, onRemove, onUpdateQuantity }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Supplier</th>
          <th>Reorder Level</th>
          <th>Sold</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.supplier}</td>
            <td>{product.reorderLevel}</td>
            <td>{product.sold}</td>
            <td>
              <button onClick={() => onUpdateQuantity(product.name, 1)}>+</button>
              <button onClick={() => onUpdateQuantity(product.name, -1)}>-</button>
              <button onClick={() => onRemove(product.name)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
