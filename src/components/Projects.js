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
    <p><a href="https://github.com/nikshitha1312/Endagered_species_guide" target="_blank">View Project on GitHub</a></p>
      </div>
      <div className={styles.project}>
        <h3>My Portfolio Website</h3>
        <p>Built a personal portfolio website to showcase education, projects, contact details, and achievements. </p>
        <p>Technologies Used: HTML, JavaScript, React, CSS</p>
        <p>Key Achievement: Designed a responsive and clean UI using React and deployed it for public access. </p>
    <p><a href="https://github.com/nikshitha1312/Portfolio_Nikshitha" target="_blank">View Project on GitHub</a></p>
      </div>
      <div className={styles.project}>
        <h3>TripMate</h3>
        <p>Implemented a Travel Manager to handle up to 100+ user submissions with a focus on accuracy and reliability. </p>
        <p>Technologies Used: React, HTML, JavaScript, CSS</p>
        <p>Key Achievement: Showcased 4 key sites in Japan, offering insights on 3+ areas with video links attached. </p>
    <p><a href="https://github.com/nikshitha1312/Trip_Mate" target="_blank">View Project on GitHub</a></p>
      </div>
     <div className={styles.project}>
        <h3>workspace</h3>
        <p>This is a modern React application built with Next.js, TypeScript, and Tailwind CSS. It features a responsive three-pane layout with interactive components and smooth animations.Features
Responsive three-pane layout with animated transitionsModern UI components built with Tailwind CSSType-safe development with TypeScriptInteractive state management Reusable component library </p>
        <p>The application is built with:
Next.js 13+ with App Router
TypeScript for type safety
Tailwind CSS for styling
Framer Motion for animations
Class Variance Authority for component variants</p>
        <p>Component-based architecture
Type-safe development
Responsive design
Reusable components
Clean and maintainable code structure
Modern React patterns and hooks </p>
    <p><a href="https://github.com/nikshitha1312/workspace" target="_blank">View Project on GitHub</a></p>
      </div>
   <div className={styles.project}>
        <h3>Grammar_Scoring_engine</h3>
        <p>The Grammar Scoring Engine project uses machine learning and speech recognition to evaluate spoken English, transcribe audio to text, and provide grammar scoring and feedback in real time. It is especially useful for learners and professionals improving their language skills.</p>
<p>Technologies Used: Python, Jupyter Notebook, SpeechRecognition, TextBlob, Flask</p>
<p>Key Achievement: Developed a speech-to-text grammar evaluation pipeline that accurately identifies grammar issues and gives user-friendly feedback with live audio support.</p>

    <p><a href=https:"//github.com/nikshitha1312/Grammar_Scoring_Engine_SHL_assess target"="_blank">View Project on GitHub</a></p>
      </div>
    </section>
  );
}

export default Projects;
