import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar'
import Footer from './Footer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
 const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hvgxh65',       // Replace with your Service ID
        'template_qixpvdu',      // Replace with your Template ID
        formRef.current,
        'TH4kWW1y5CouxLsCM'        // Replace with your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Something went wrong. Try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div>
    <Navbar />

    <section className="contact-hero">
      <div className="hero-content">
        <h1 className="hero-title">Contact Us</h1>
        <p className="hero-subtitle">
          We're here to help. Reach out to us with any questions, feedback, or collaboration ideas.
        </p>
      </div>
    </section>

    <div className="contact-page">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We'd love to hear from you!</p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
        <section className="contact-info-section">
      <div className="contact-info-container">
        <div className="info-item">
          <FaEnvelope className="info-icon" />
          <div>
            <h4>Email</h4>
            <p>muhammmadrabi59@gmail.com</p>
          </div>
        </div>

        <div className="info-item">
          <FaPhone className="info-icon" />
          <div>
            <h4>Phone</h4>
            <p>+92 332 8785677</p> {/* Replace with your real contact number */}
          </div>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h4>Location</h4>
            <p>Lahore, Pakistan</p> {/* Replace or expand as needed */}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Contact