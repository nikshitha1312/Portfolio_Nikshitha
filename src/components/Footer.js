// components/Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Import CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Nikshitha Vadthyavath. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;