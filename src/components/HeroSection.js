import React from 'react';
import './HeroSection.css';
import heroImage from '../assests/Images/images.jpg'; 

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Welcome to Our Amazing Website</h1>
        <p>Discover the best services and products here!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
}

export default HeroSection;
