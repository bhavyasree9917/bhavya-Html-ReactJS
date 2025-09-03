import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '16px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold'
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="#" style={linkStyle}>privacy policy</a>
        <a href="#" style={linkStyle}>Terms of Service</a>
        <a href="#" style={linkStyle}>Help</a>
      </div>
      
      <div style={{ marginTop: '10px' }}>
        &copy; {new Date().getFullYear()} My React Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
