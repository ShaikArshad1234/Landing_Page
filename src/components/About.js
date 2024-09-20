import React from 'react';
import './About.css'; 
import Image1 from '../assests/Images/Image1.jpg'; 
import Image2 from '../assests/Images/Image2.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        Welcome to [Your Company/Website Name]. We are dedicated to providing exceptional services and products to our customers. Our team of professionals is committed to excellence and innovation, ensuring that we deliver top-notch solutions tailored to your needs.
      </p>
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src={Image1} alt="Team Member 1" className="team-photo" />
          <div className="team-info">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
            <p>John is the visionary behind our company, leading with over 20 years of experience in the industry.</p>
          </div>
        </div>
        <div className="team-member">
          <img src={Image2} alt="Team Member 2" className="team-photo" />
          <div className="team-info">
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
            <p>Jane manages the daily operations of the company, ensuring everything runs smoothly.</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
      <div className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
          <li><strong>Customer Focus:</strong> We are committed to meeting the needs of our customers.</li>
          <li><strong>Innovation:</strong> We foster a culture of innovation to bring new and creative solutions.</li>
          {/* Add more values as needed */}
        </ul>
      </div>
    </div>
  );
};

export default About;
