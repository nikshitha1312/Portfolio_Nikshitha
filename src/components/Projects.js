// components/Projects.js
import React from 'react';
import styles from './Projects.module.css'; // Import CSS module

function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.project}>
        <h3>Endangered Species</h3>
        <p>The Endangered Species Detection and Prevention project uses machine learning to identify endangered species from images and videos, analyze population trends, and explore conservation measures.Trained and Tested 12000+ images.</p>
        <p>Technologies Used: Python, Jupyter Notebook, C++, HTML, CNN,Yolo</p>
        <p>Key Achievement: Implemented a CNN model achieving 85% accuracy in detecting endangered species across 10,000+ images. </p>
      </div>
      <div className={styles.project}>
        <h3>My Portfolio Website</h3>
        <p>Built a personal portfolio website to showcase education, projects, contact details, and achievements. </p>
        <p>Technologies Used: HTML, JavaScript, React, CSS</p>
        <p>Key Achievement: Designed a responsive and clean UI using React and deployed it for public access. </p>
      </div>
      <div className={styles.project}>
        <h3>Travel Guide</h3>
        <p>Implemented a Travel Manager to handle up to 100+ user submissions with a focus on accuracy and reliability. </p>
        <p>Technologies Used: React, HTML, JavaScript, CSS</p>
        <p>Key Achievement: Showcased 4 key sites in Japan, offering insights on 3+ areas with video links attached. </p>
      </div>
    </section>
  );
}

export default Projects;