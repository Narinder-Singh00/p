import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('🎉 Woohoo! Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <h1 className="heading"><i className="fas fa-envelope"></i> Contact <span>Me</span></h1>
      <div className="home_section">
        <div className="image_container">
          <img src="/image/contact.jpg" alt="Narinder Singh's portrait" />
          <div className="new_btn">
            <a href="/resume.pdf" download>My Portfolio <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="home_content">
          <div className="contact_form">
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;