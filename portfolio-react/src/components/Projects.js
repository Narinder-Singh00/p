import React, { useEffect } from 'react';

function Projects() {
  // Initialize Vanilla Tilt when the component mounts
  useEffect(() => {
    const VanillaTilt = require('vanilla-tilt');
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
      max: 45,    // Maximum tilt rotation (degrees)
      speed: 450, // Speed of the tilt effect
      glare: true, // Optional: Adds a glare effect
      'max-glare': 0.5 // Optional: Glare opacity
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="projects" className="projects-section">
      <h1 className="heading"><i className="fas fa-project-diagram"></i> My <span>Projects</span></h1>
      <div className="text-content">
        <p className="section-sub-text">My Work</p>
      </div>
      <p className="projects-description">
        The following projects showcase my skills and experience through real-world examples of my work.
      </p>
      <div className="projects-container">
        <div className="project-card" data-tilt>
          <div className="project-image-wrapper">
            <img src="/image/p1.png" alt="Dynamic Pricing project preview" className="project-image" />
            <div className="source-code-icon" onClick={() => window.open('https://github.com/your-repo-link', '_blank')}>
              <img src="/logo/github.png" alt="GitHub" />
            </div>
          </div>
          <div className="project-info">
            <h3 className="project-title">Dynamic Pricing</h3>
            <p className="project-description">
              An AI-powered pricing model that adjusts product prices in real-time based on demand, competitor rates, and sales trends.
            </p>
            <div className="project-tags">
              <span className="tag tag-blue">#html</span>
              <span className="tag tag-green">#css</span>
              <span className="tag tag-pink">#javascript</span>
            </div>
          </div>
        </div>
        {/* Add other project cards here */}
        <div className="project-card" data-tilt>
          <div className="project-image-wrapper">
            <img src="/image/p2.png" alt="Portfolio project preview" className="project-image" />
            <div className="source-code-icon" onClick={() => window.open('https://github.com/your-repo-link', '_blank')}>
              <img src="/logo/github.png" alt="GitHub" />
            </div>
          </div>
          <div className="project-info">
            <h3 className="project-title">Portfolio</h3>
            <p className="project-description">
              A personal web portfolio showcasing skills, projects, and experience with a clean UI, responsive design, and smooth navigation.
            </p>
            <div className="project-tags">
              <span className="tag tag-blue">#react</span>
              <span className="tag tag-green">#ai</span>
              <span className="tag tag-pink">#javascript</span>
            </div>
          </div>
        </div>
        <div className="project-card" data-tilt>
          <div className="project-image-wrapper">
            <img src="/image/p3.png" alt="Portfolio project preview" className="project-image" />
            <div className="source-code-icon" onClick={() => window.open('https://github.com/your-repo-link', '_blank')}>
              <img src="/logo/github.png" alt="GitHub" />
            </div>
          </div>
          <div className="project-info">
            <h3 className="project-title">Datasets</h3>
            <p className="project-description">
            Worked on multiple datasets to apply data preprocessing, build predictive models, and perform analysis using machine learning techniques like classification and regression.
            </p>
            <div className="project-tags">
              <span className="tag tag-blue">#python</span>
              <span className="tag tag-green">#ai</span>
              <span className="tag tag-pink">#javascript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;