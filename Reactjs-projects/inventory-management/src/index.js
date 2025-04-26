// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here

import App from './App';

// Create root and render your app using the new method for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

