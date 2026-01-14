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
  {/* WhatsApp */}
  <a 
    href="https://wa.me/message/URO5FLGSHZNON1" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn btn-whatsapp"
  >
    <div className="icon-wrapper">
      <img src="/images/whats.png" alt="Whatsapp" />
    </div>
    <span className="btn-text">Whatsapp us</span>
  </a>

  {/* Call Us - Changed to anchor tag for functionality */}
  <a href="tel:+919876543210" className="btn btn-call">
    <div className="icon-wrapper">
      <img src="/images/phone2.png" alt="Call" />
    </div>
    <span className="btn-text">Call Us</span>
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/og_holidays?igsh=aTFobGt6NmYxeWVl&utm_source=qr" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn btn-instagram"
  >
    <div className="icon-wrapper">
      <img src="/images/insta.png" alt="Instagram" />
    </div>
    <span className="btn-text"> Follow Us</span>
  </a>
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
              {/* STICKY CONTACT BUTTONS */}
<div className="floating-contact">
  {/* WhatsApp Icon */}
  <a 
    href="https://wa.me/message/URO5FLGSHZNON1" 
    className="floating-btn whatsapp-btn" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>

  {/* Phone Icon */}
  <a href="tel:+91XXXXXXXXXX" className="floating-btn phone-btn">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  </a>
</div>
    </section>
  );
};

export default Contact;