import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        I'm a Computer Engineering student at Hacettepe University with a passion for software development and problem-solving. 
        I have experience in various programming languages and technologies, and I'm always eager to learn more.
      </p>
      <div className={styles.contact}>
        <p>✉️ <a href="mailto:toprakgungor02@gmail.com">toprakgungor02@gmail.com</a></p>
        <p>🔗 <a href="https://linkedin.com/in/toprak-gungor" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/b2210356037" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </div>
    </section>
  );
}

export default About;
