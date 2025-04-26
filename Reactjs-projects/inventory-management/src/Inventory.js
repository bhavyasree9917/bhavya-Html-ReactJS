// src/Inventory.js
class Inventory {
    constructor() {
      this.products = [];
    }
  
    get lowStockProducts() {
      return this.products.filter(p => p.quantity <= p.reorderLevel);
    }
  
    get totalInventoryValue() {
      return this.products.reduce((total, product) => total + (product.quantity * product.price), 0);
    }
  
    get categories() {
      return [...new Set(this.products.map(p => p.category))];
    }
  
    get mostSoldProducts() {
      return [...this.products]
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 5);
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    updateQuantity(productName, quantity) {
      const product = this.products.find(p => p.name === productName);
      if (product) {
        product.quantity += quantity;
      }
    }
  
    removeProduct(productName) {
      this.products = this.products.filter(p => p.name !== productName);
    }
  }
  
  export default Inventory;
  