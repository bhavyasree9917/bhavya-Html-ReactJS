import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    backgroundColor: '#4CAF50',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    fontSize: '24px'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
    fontSize: '18px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <header style={headerStyle}>
      Welcome to My React Website
      <ul>
        <li><Link to="">Home</Link></li>
        <li><Link to="Footer">Home</Link></li>
      </ul>
    </header>
  );
}

export default Header;
