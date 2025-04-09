import React, { useEffect } from 'react'; // Place this at the top
import VanillaTilt from 'vanilla-tilt'; // Add this import if using npm

function About() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.service-card'), {
      max: 45,    // Maximum tilt rotation (degrees)
      speed: 450, // Speed of the tilt effect
      glare: true, // Optional: Adds a glare effect
      'max-glare': 0.5 // Optional: Glare opacity
    });
  }, []); // Place this inside the function, before return

  return (
    <section id="about" className="about-section">
      <h1 className="heading"><i className="fas fa-user"></i> About <span>Me</span></h1>
      <div className="text-content">
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview</h2>
      </div>
      <p className="about-description">
        I am a B.Tech CSE AI & ML student passionate about web development and AI. My focus is on building smart and user-friendly applications through continuous learning and innovation.
      </p>
      <div className="services-container">
        <div className="service-card" data-tilt>
          <div className="card-inner">
            <img src="/logo/forntend.png" alt="Frontend Development icon" className="card-icon" />
            <h3 className="card-title">Frontend Development</h3>
          </div>
        </div>
        <div className="service-card" data-tilt>
          <div className="card-inner">
            <img src="/logo/backend.png" alt="Backend Development icon" className="card-icon" />
            <h3 className="card-title">Backend Development</h3>
          </div>
        </div>
        <div className="service-card" data-tilt>
          <div className="card-inner">
            <img src="/logo/softwaredeveloper.png" alt="Software Development icon" className="card-icon" />
            <h3 className="card-title">Software Development</h3>
          </div>
        </div>
        <div className="service-card" data-tilt>
          <div className="card-inner">
            <img src="/logo/aisolution.png" alt="AI/ML Solutions icon" className="card-icon" />
            <h3 className="card-title">AI/ML Solutions</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; // This stays at the bottom