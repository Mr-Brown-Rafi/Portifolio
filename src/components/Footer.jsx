import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            Hi, I'm Rafi, a passionate web developer. I enjoy creating web solutions that solve real-world problems. Connect with me through the links below.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Me</h3>
          <p>Email: <a href="mailto:rafi@example.com">rafi@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
        </div>

        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Rafi - All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
