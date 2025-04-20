import React from 'react';
import styles from './Experience.module.css';
import siemensLogo from '../assets/logos/siemens_logo.jpg';
import simsoftLogo from '../assets/logos/simsoftofficial_logo.jpg';
import tubitakLogo from '../assets/logos/tubitak_logo.jpg';
import freelanceLogo from '../assets/logos/TG.png';

function Experience() {
  const experiences = [
    {
      logo: siemensLogo,
      title: "Software Engineer",
      company: "Siemens",
      date: "Jan 2025 – Present",
      
      description: [
        "Implemented Electron IPC messaging to connect the Angular front-end with the main process, enabling UI control over core application features.",
        "Integrated Electron's ipcMain and ipcRenderer modules to establish secure and efficient communication channels for UI-driven commands.",
        "Designed custom IPC message protocols to standardize communication for various control actions between the Angular renderer and Electron main process.",
        "Utilized asynchronous IPC communication to allow the Angular UI to manage backend tasks without blocking, enhancing application workflow.",
        "Embedded Keycloak authentication pages directly within the application view for robust user login and identity management."
      ]
    },
    {
      logo: simsoftLogo,
      company: "Simsoft Computer Tehnologies",
      title: "Software Engineer",
      date: "Jul 2024 – Aug 2024",
      description: [
        "Developed computer vision projects using YOLO algorithms, gaining hands-on experience with transfer learning, CNN and model fine-tuning.",
        "Created a TCP-based socket application with PyQt6 GUI and Firebase integration, enhancing network programming skills.",
        "Contributed to a Udemy-like e-learning platform using Django, with PostgreSQL database, and containerization with Docker."
      ]
    },
    {
      logo: freelanceLogo,
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
      logo: tubitakLogo,
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
      {}

      {experiences.map((exp, index) => (
        <div key={index} className={styles.job}>
          {}
          <div className={styles.jobHeader}>
            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className={styles.companyLogo}
              />
            )}
            <div className={styles.jobHeaderText}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className={styles.date}>{exp.date}</p>
            </div>
          </div>
          {}

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
