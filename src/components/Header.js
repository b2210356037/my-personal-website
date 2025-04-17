import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header({toggleTheme, theme}) {
  return (
    <header className={styles.header}>
      <h1>Toprak Güngör</h1>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : ''}>Home</NavLink>
        <NavLink to="/leetcode" className={({ isActive }) => isActive ? styles.activeLink : ''}>Huprog & LeetCode Solutions</NavLink>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
