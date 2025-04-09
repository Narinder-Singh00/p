import React from 'react';

function Home() {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Narinder</span></h1>
        <div className="text-animate">
          <h3>Web Developer</h3>
        </div>
        <p>
          As a passionate and innovative web developer, I specialize in transforming ideas into stunning, responsive websites using the latest technologies.
        </p>
        <div className="btn-box">
          <a href="/resume.pdf" className="btn" download>Resume</a>
          <a href="/contact" className="btn">Contact Me</a>
        </div>
      </div>
      <div className="home-sci">
        <a href="https://www.linkedin.com/in/narinder-singh04/"><i className="bx bxl-linkedin"></i></a>
        <a href="https://github.com"><i className="bx bxl-github"></i></a>
        <a href="https://instagram.com"><i className="bx bxl-instagram"></i></a>
        <a href="https://facebook.com"><i className="bx bxl-facebook"></i></a>
        <a href="mailto:narinderkhuttan1005@gmail.com"><i className="bx bxl-gmail"></i></a>
      </div>
      <div className="image-section">
        <img src="/image/1.png" alt="Narinder Singh" />
      </div>
      <div className="home-imgHover"></div>
    </section>
  );
}

export default Home;