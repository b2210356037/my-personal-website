import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Toprak Güngör</h1>
      <nav>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : ''}>Home</NavLink>
        <NavLink to="/leetcode" className={({ isActive }) => isActive ? styles.activeLink : ''}>Huprog & LeetCode Solutions</NavLink>
      </nav>
    </header>
  );
}

export default Header;
