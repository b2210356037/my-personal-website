import React from 'react';
import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <div className={styles.degree}>
        <h3>Hacettepe University, Ankara, Turkey</h3>
        <p>Undergraduate Computer Engineering</p>
        <p>GPA: 3.32/4</p>
        <p>2022 - 2026</p>
      </div>
      <div className={styles.additional}>
        <h4>Languages:</h4>
        <p>C1 English, B1 German</p>
        <h4>Related Coursework:</h4>
        <p>Data Structures, Algorithms, Computer Organization, Algorithms Analysis, Software Engineering, Systems Programming, Automata Theory, Database Management, Operating Systems, Programming Languages</p>
      </div>
    </section>
  );
}

export default Education;
