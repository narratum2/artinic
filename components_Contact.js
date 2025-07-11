import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <>
      <Helmet>
        <title>Contact - Artinic</title>
        <meta name="description" content="Contact our Swiss art consultancy for personalized services." />
        <meta name="keywords" content="contact art consultancy, Swiss art services, art consultation" />
      </Helmet>
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required aria-required="true" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required aria-required="true" />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required aria-required="true" />
            <button type="submit" className="cta-button">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <p>Email: info@artinic.com</p>
          <p>Phone: +41 61 123 4567</p>
          <p>Address: Basel, Switzerland</p>
        </div>
      </section>
    </>
  );
};

export default Contact;