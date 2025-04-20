import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C#', 'JavaScript', 'C++'] },
    { category: 'Technologies/Tools', items: ['Flutter', 'Firebase', 'Arduino', 'ReactJS', "ElectronJS", "Keycloak",'Git', 'VSCode', '.NET', 'Flask', 'Proteus'] },
  ];

  return (
    <section className={styles.skills}>
      <h2>Technical Skills</h2>
      {skills.map((skillGroup, index) => (
        <div key={index}>
          <h3>{skillGroup.category}</h3>
          <ul>
            {skillGroup.items.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
