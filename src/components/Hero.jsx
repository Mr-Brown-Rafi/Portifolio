import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id='hero'>
      <div className="hero-content">
        <h1>Hello, I'm Rafi</h1>
        <p>
        Full Stack Developer with 4 years of experience designing, developing, and deploying scalable web applications. Proficient in .NET Core, React, and cloud technologies with expertise in building end-to-end solutions. Certified Azure Developer Associate, adept at migrating legacy systems to modern architectures and optimizing performance. Passionate about exploring microservices and distributed systems to deliver high-quality user experiences.
        </p>
        <button className="cta">Learn More</button>
      </div>
    </section>
  );
}

export default Hero;
