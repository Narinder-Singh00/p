import React from 'react';

function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_container">
        <div className="footer_logo">
          <h2>Narinder Singh</h2>
          <p>Building smart and user-friendly applications through AI & Web Development.</p>
        </div>
        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer_contact">
          <h4>Contact Info</h4>
          <ul>
            <li>Email: narinderkhuttan1005@gmail.com</li>
            <li>Phone: +91 8699410317</li>
            <li>Location: Punjab, India</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© 2025 Narinder Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;