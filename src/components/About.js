// components/About.js
import React from 'react';
import styles from './About.module.css'; 

function About() {
  return (
    <section className={styles.about}>
         <img src="/profile.jpeg" alt="Your Profile" className={styles.profileImage} />
      <h2 className={styles.sectionTitle}>About Me</h2>
      {/* Add a brief introduction here.  
          Consider pulling information from the resume. */}
      <p> Passionate and motivated Information technology student at IIIT Sonepat with a strong eagerness to learn and
explore new technologies. While early in my academic journey, I approach challenges with curiosity and
determination. I am excited to engage in academic projects, internships, and extracurricular activities that will
contribute to my growth as a future professional in the tech industry.</p>
      <p>Email: nikshitha1312@gmail.com</p>
      <p>Phone: +91-9347556415</p>
      {/* Add LinkedIn link here */}
      <a href="https://www.linkedin.com/in/nikshitha-vadthyavath-40656325a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
  );
}

export default About;