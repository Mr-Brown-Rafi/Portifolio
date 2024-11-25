import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import Dp from "../assets/Portfolio_pic-transformed.jpeg"

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const staticText = "I'm a ";
  const roles = [
    ".NET Developer",
    "React Developer",
    "DevOps Enthusiast"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const typingDelay = 100; // Delay between each character
    const deletingDelay = 50; // Faster delay when deleting
    const pauseDelay = 2000; // Pause when text is complete
    
    const animateText = () => {
      const currentRole = roles[roleIndex];
      
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
          <span className="typing-text">{displayText}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-quote">
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
        </p>
        <p className="hero-liner">.NET and React Developer | DevOps Enthusiast</p>
      </div>
    </section>
  );
};

export default Hero;