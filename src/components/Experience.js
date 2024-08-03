import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Freelance",
      date: "June 2023 – Sep 2023",
      description: [
        "Developed C# and .NET desktop application for an OHS company",
        "Designed an application that has the data preloaded and automatically registers and assigns various tests to the patients",
        "The company saved more than 100k TL annually by the application and saves at the median of 2 hours of work daily"
      ]
    },
    {
      title: "Software Engineer",
      company: "Hacettepe University, Tübitak",
      date: "Feb 2023 – Aug 2023",
      description: [
        "Under the guidance of Prof. Ahmet Burak Can, labeled and annotated UCF Crime video footage data to train an anomaly detection algorithm",
        "Contributed to the development of the algorithm with pandas and NumPy",
        "Our algorithm has the potential to reduce the duration of reporting the crime to authorities by up to 20 minutes, which is crucial for saving lives"
      ]
    }
  ];

  return (
    <section className={styles.experience}>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.job}>
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <p className={styles.date}>{exp.date}</p>
          <ul>
            {exp.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
