import React from 'react';
import styles from './Education.module.css'; // Import CSS module

function Education() {
  return (
    <section className={styles.education}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <table className={styles.educationTable}>
        <thead>
          <tr>
            <th>Degree</th>
            <th>Institute</th>
            <th>Board/University</th>
            <th>CGPA/Percentage</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.Tech IT</td>
            <td>Indian Institute Of Information Technology Sonepat</td>
            <td>IIIT Sonepat</td>
            <td>8.5 (Till 5th Sem)</td>
            <td>2022-2026</td>
          </tr>
          <tr>
            <td>Senior Secondary</td>
            <td>Sri Chaitanya college</td>
            <td>Telangana Board</td>
            <td>84.6%</td>
            <td>2020-2022</td>
          </tr>
          <tr>
            <td>Matriculation</td>
            <td>Sri Aurobindo High School</td>
            <td>Telangana Board</td>
            <td>10.0%</td>
            <td>2019-2020</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;