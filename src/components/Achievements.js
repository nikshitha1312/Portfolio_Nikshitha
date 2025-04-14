// components/Achievements.js
import React from 'react';
import styles from './Achievements.module.css'; // Import CSS module

function Achievements() {
  return (
    <section className={styles.achievements}>
      <h2 className={styles.sectionTitle}>Achievements</h2>
      <ul className={styles.achievementsList}>
        <li>Participated in the Smart India Hackathon and successfully cleared the internal round.</li>
        <li>Tackled more than 400+ problems on codeforces, leetcode, codechef,coding ninja,gfg etc</li>
        <li>Participated in an inter-state cultural exchange to promote national integration.</li>
        <li>Attended Startup Mahakumbh 2025, Asia's largest startup event with 1000+ startups and 50,000+ attendees, gaining exposure to innovation and entrepreneurship.</li>
        <li>"I have also built several projects in both Machine Learning and Web Development, demonstrating not only my ability to create intelligent systems and dynamic, user-friendly web applications, but also my strong problem-solving skills through practical, real-world implementations." </li>
      </ul>
    </section>
  );
}

export default Achievements;