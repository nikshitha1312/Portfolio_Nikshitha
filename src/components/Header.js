// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import CSS module

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Nikshitha Vadthyavath</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={styles.navLink}>About</Link></li>
          <li><Link to="/education" className={styles.navLink}>Education</Link></li>
          <li><Link to="/projects" className={styles.navLink}>Projects</Link></li>
          <li><Link to="/skills" className={styles.navLink}>Skills</Link></li>
           <li><Link to="/certifications" className={styles.navLink}>Certifications</Link></li>
          <li><Link to="/achievements" className={styles.navLink}>Achievements</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;