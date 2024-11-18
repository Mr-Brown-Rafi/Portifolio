import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Rafi</h1>
        <p>
          A .NET and React Developer with experience in DevOps and building scalable web applications.
        </p>
        <button className="cta">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
