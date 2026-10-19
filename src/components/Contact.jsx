import React from 'react';

function Contact() {
return ( 
<div className="contact-page">


  <div className="contact-banner">
    <h1>Contact Us</h1>
    <p>We'd love to hear from you!</p>
    <p>Have a question? We're here to help.</p>
  </div>

  <div className="contact-content">

    <div className="contact-info">
      <h2>Get in Touch</h2>
      <p className="contact-description">
        Have a question about a product or need help with your order?
        Contact us, and we'll be happy to assist you.
      </p>

      <div className="contact-info-card">
        <div className="contact-icon">📧</div>
        <div>
          <h4>Email Us</h4>
          <p>support@beya.example</p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="contact-icon">🛍️</div>
        <div>
          <h4>Customer Support</h4>
          <p>We're here to help with your shopping questions.</p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="contact-icon">⏰</div>
        <div>
          <h4>Working Hours</h4>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 6:00 PM</p>
        </div>
      </div>

      <div className="contact-info-card">
        <div className="contact-icon">📞</div>
        <div>
          <h4>Call Us</h4>
          <p>+91 9876543210</p>
        </div>
      </div>
    </div>



    <div className="contact-form-section">
      <h2>Send Us a Message</h2>
      <p>Fill out the form below and let us know how we can help.</p>
      


      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Thank you for contacting Beya!');
        event.target.reset();
      }}>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="What is your message about?"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-submit-btn">
          Send Message
        </button>

      </form>
    </div>

  </div>

</div>

);
}

export default Contact;
