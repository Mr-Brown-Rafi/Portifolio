import React, { useState } from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme', !darkMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
