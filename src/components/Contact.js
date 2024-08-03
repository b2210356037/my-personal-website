import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p>Email: <a href="mailto:toprakgungor02@gmail.com">toprakgungor02@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/b2210356037" target="_blank" rel="noopener noreferrer">github.com/b2210356037</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/toprak-gungor" target="_blank" rel="noopener noreferrer">linkedin.com/in/toprak-gungor</a></p>
    </section>
  );
}

export default Contact;
