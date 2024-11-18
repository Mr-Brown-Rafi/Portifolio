import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Portfolio</h1>

      {/* Toggle button for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Links section */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={closeMenu}>Home</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
