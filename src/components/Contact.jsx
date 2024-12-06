import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
import '../styles/variables.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks submission state
  const [popupMessage, setPopupMessage] = useState(''); // Stores the message for the popup
  const [showPopup, setShowPopup] = useState(false); // Tracks popup visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Send the first email
    emailjs
      .send(
        'service_q5f3fo4',
        'template_xrzsl2n',
        formData,
        'RdlrHBcr-SgiUdQT6'
      )
      .then(() => {
        // Send the second email
        return emailjs.send(
          'service_q5f3fo4',
          'template_n2u39ob',
          formData,
          'RdlrHBcr-SgiUdQT6'
        );
      })
      .then(() => {
        setPopupMessage('Your message has been sent successfully to Rafi 😊. \n Check your inbox for more details.');
        setShowPopup(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch(() => {
        setPopupMessage('Failed to send the message. Please try again.');
        setShowPopup(true);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Whether you have a question, a project, or just want to say hi, feel free to reach out!
      </p>
      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="contact-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Social Links */}
        <div className="contact-social">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/md-rafi-dudekula/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mr-Brown-Rafi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:rafidmr0438@gmail.com">
                <svg
                  className="social-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button className="popup-close" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
