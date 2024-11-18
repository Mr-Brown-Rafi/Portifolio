import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Whether you have a question, a project, or just want to say hi, feel free to reach out!
      </p>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" action="#" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        {/* Social Links */}
        <div className="contact-social">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:your-email@example.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
