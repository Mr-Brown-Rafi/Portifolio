import React from 'react';
import '../styles/Hero.css';
import Dp from "../assets/Portfolio_pic-transformed.jpeg"

function Hero() {
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
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-quote">
          "Success is not final, failure is not fatal: It is the courage to continue that counts."
        </p>
        <p className="hero-liner">.NET and React Developer | DevOps Enthusiast</p>
      </div>
    </section>
  );
}

export default Hero;
