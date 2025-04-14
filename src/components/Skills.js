// components/Skills.js
import React from 'react';
import styles from './Skills.module.css'; // Import CSS module

function Skills() {
  return (
    <section className={styles.skills}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillCategory}>
        <h3>Programming Languages</h3>
        <p>C/C++, Python, JavaScript, HTML, CSS, SQL, Mern Stack, AWS, Java, Assembly Language, Competitive Programming, Machine learning, Jupyter Notebook, Tailwind CSS</p>
      </div>
      <div className={styles.skillCategory}>
        <h3>Tools and Frameworks</h3>
        <p>Jupyter, Visual Studio, Git, Excel, Power Bi, CNN, Docker, Canva</p>
      </div>
      <div className={styles.skillCategory}>
        <h3>Operating Systems</h3>
        <p>Windows, Linux</p>
      </div>
      <div className={styles.skillCategory}>
        <h3>Soft Skills</h3>
        <p>Leadership, Team Management, Adaptability, Problem Solving, Public Speaking</p>
      </div>
    </section>
  );
}

export default Skills;