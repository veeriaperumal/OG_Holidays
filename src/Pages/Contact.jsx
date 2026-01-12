import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Text & Buttons */}
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Contact OG Holidays for personalised tour packages and travel assistance
          </p>

          <div className="contact-buttons">
            <button className="btn btn-whatsapp">
              <div className="icon-wrapper">
                {/* References public/images/whatsapp.png */}
                <img src="/images/whats.png" alt="Whatsapp" />
              </div>
              <span className="btn-text">Whatsapp us</span>
            </button>
            
            <button className="btn btn-call">
              <div className="icon-wrapper">
                {/* References public/images/phone-white.png */}
                <img src="/images/phone2.png" alt="Call" />
              </div>
              <span className="btn-text">Call Us</span>
            </button>
            
            <button className="btn btn-instagram">
              <div className="icon-wrapper">
                {/* References public/images/instagram.png */}
                <img src="/images/insta.png" alt="Instagram" />
              </div>
              <span className="btn-text">Follow Us</span>
            </button>
          </div>

          <div className="contact-info-row">
            <div className="info-item">
              {/* References public/images/phone-black.png */}
              <img src="/images/phone1.png" alt="Phone" className="info-icon-img" />
              <div className="info-text">
                <span className="label">PHONE</span>
                <span className="value">03 5432 1234</span>
              </div>
            </div>

            <div className="info-item">
              {/* References public/images/fax.png */}
              <img src="/images/fox.png" alt="Fax" className="info-icon-img" />
              <div className="info-text">
                <span className="label">FAX</span>
                <span className="value">03 5432 1234</span>
              </div>
            </div>

            <div className="info-item">
              {/* References public/images/email.png */}
              <img src="/images/email.png" alt="Email" className="info-icon-img" />
              <div className="info-text">
                <span className="label">EMAIL</span>
                <span className="value">info@marcc.com.au</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Map & Location */}
        <div className="contact-right">
          <div className="map-wrapper">
            {/* References public/images/map.jpg */}
            <img 
              src="/images/map.png" 
              alt="Map Location" 
              className="map-image" 
            />
          </div>
        </div>

      </div>
      {/* Decorative Yellow Background */}
      <div className="yellow-bg-accent"></div>
    </section>
  );
};

export default Contact;