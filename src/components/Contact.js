// components/Contact.js
import React from 'react';
import styles from './Contact.module.css'; // Import CSS module

function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p>Email: nikshitha1312@gmail.com</p>
      <p>Phone: +91-9347556415 </p>
      {/* You can add a simple contact form here if you want */}
      {/* Example (replace with a real form if needed): */}
      {/*
      <form className={styles.contactForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Submit</button>
      </form>
      */}
    </section>
  );
}

export default Contact;