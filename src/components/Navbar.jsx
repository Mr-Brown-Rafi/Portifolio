import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import LogoImg from "../assets/Rafi_balckSuit.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false); // Close menu on mobile after clicking a link
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundSection = "#hero"; // Default to the first section

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          foundSection = `#${section.id}`;
        }
      });

      setActiveLink(foundSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src={LogoImg}
          alt="Brand Logo" 
          className="brand-logo" 
        />
        <div className="portfolio-name">Portfolio</div>
      </div>
      <div
        className={`nav-links ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <a
          href="#hero"
          className={activeLink === "#hero" ? "active" : ""}
          onClick={() => handleLinkClick("#hero")}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeLink === "#skills" ? "active" : ""}
          onClick={() => handleLinkClick("#skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === "#projects" ? "active" : ""}
          onClick={() => handleLinkClick("#projects")}
        >
          Projects
        </a>
        <a
          href="#certs"
          className={activeLink === "#certs" ? "active" : ""}
          onClick={() => handleLinkClick("#certs")}
        >
          Certs
        </a>
        <a
          href="#contact"
          className={activeLink === "#contact" ? "active" : ""}
          onClick={() => handleLinkClick("#contact")}
        >
          Contact
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
