// components/Certifications.js
import React from 'react';
import styles from './Certifications.module.css'; // Import CSS module

function Certifications() {
  return (
    <section className={styles.certifications}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <ul className={styles.certificationsList}>
        <li>AWS Certificate AWS</li>
        <li>Power BI JS Academy</li>
      </ul>
    </section>
  );
}

export default Certifications;