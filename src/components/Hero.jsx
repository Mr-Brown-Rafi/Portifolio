import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import Dp from "../assets/Rafi_balckSuit.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const staticText = "I'm a ";
  const roles = [
    { text: ".NET Developer", color: "#3b82f6" },
    { text: "React Developer", color: "#60d9fa" },
    { text: "DevOps Enthusiast", color: "#22c55e" }
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const typingDelay = 100;
    const deletingDelay = 50;
    const pauseDelay = 2000;
    
    const animateText = () => {
      const currentRole = roles[roleIndex].text;
      
      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          const timer = setTimeout(() => {
            setDisplayText(currentRole.slice(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
          }, typingDelay);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
          return () => clearTimeout(timer);
        }
      } else {
        if (currentIndex > 0) {
          const timer = setTimeout(() => {
            setDisplayText(currentRole.slice(0, currentIndex - 1));
            setCurrentIndex(prev => prev - 1);
          }, deletingDelay);
          return () => clearTimeout(timer);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const cleanup = animateText();
    return cleanup;
  }, [currentIndex, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    // Create link element
    const link = document.createElement('a');

    // Set link properties
    link.href = '/Rafi_Software_Engineer.pdf';  // Path relative to public folder
    link.download = 'Rafi_Software_Engineer.pdf'; // Suggested name for download
    
    // Required for Firefox
    link.target = '_blank';
    
    // Append to document, trigger click, and remove
    document.body.appendChild(link);
    link.click();

     // Add your resume download logic here
     //window.open('Rafi_Software_Engineer', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <img
          src={Dp}
          alt="Profile"
          className="hero-photo"
        />
      </div>
      <div className="hero-right">
        <h1 className="hero-title">
          <span className="static-text">{staticText}</span>
          <span 
            className="typing-text"
            style={{ color: roles[roleIndex].color }}
          >
            {displayText}
          </span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-quote">
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
        </p>
        <p className="hero-liner">.NET and React Developer | DevOps Enthusiast</p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
          <button 
            className="btn btn-secondary"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;