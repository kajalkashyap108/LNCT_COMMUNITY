// src/components/Footer.js
import React from 'react';

// Define internal styles
const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e0e0e0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 10px',
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p>
          <a href="/about" style={styles.link}>About</a> | <a href="/contact" style={styles.link}>Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
