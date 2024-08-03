import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  const projects = [
    {
      title: "Deutsch Lernen",
      tech: "Python, Flask, BS4, Web Development, Web Scraping",
      date: "June 2023 – Present",
      description: [
        "Designed and developed a front-end web application to help German learners with Flask.",
        "Optimized the amount of time learners spend on searching for conjugations and examples by 54%.",
        "Implemented GitHub repository on Vercel to host the website free and continuously."
      ]
    },
    {
      title: "MBTI Style Character Analysis",
      tech: "Python, NumPy, Pandas, Machine Learning",
      date: "Dec 2022 – Jan 2023",
      description: [
        "Developed a personality prediction algorithm with KNN.",
        "Used more than 60k people's data from all over the world, the dataset is on Kaggle.",
        "Enhanced the algorithm's success rate to 98% using NumPy for matrix multiplication and pandas for training."
      ]
    }
  ];

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h3>{project.title}</h3>
            <p className={styles.tech}>{project.tech}</p>
            <p className={styles.date}>{project.date}</p>
            <ul>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
