import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LeetCode from './components/LeetCode';
import styles from './App.module.css';

function App() {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={styles.app}>
      <Header toggleTheme={toggleTheme} theme={theme} />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/leetcode" element={<LeetCode />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
