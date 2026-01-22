import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">

        {/* LEFT CONTENT */}
        <div className="contact__content">
          <h1 className="contact__title">Contact Us</h1>
          <p className="contact__subtitle">
            Contact OG Holidays for personalised tour packages and travel assistance
          </p>

          {/* BUTTONS */}
          <div className="contact__buttons">
            <a
              href="https://wa.me/message/URO5FLGSHZNON1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn whatsapp"
            >
              <img src="/images/whats.png" alt="Whatsapp" />
              <span>Whatsapp Us</span>
            </a>

            <a href="tel:+917339358148" className="contact-btn call">
              <img src="/images/phone2.png" alt="Call" />
              <span>Call Us</span>
            </a>

            <a
              href="https://www.instagram.com/og_holidays"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn instagram"
            >
              <img src="/images/insta.png" alt="Instagram" />
              <span>Follow Us</span>
            </a>
          </div>

          {/* INFO */}
          <div className="contact__info">
            <div className="info-box">
              <img src="/images/phone1.png" alt="" />
              <div>
                <strong>Phone</strong>
                <p>+91 8754716319</p>
                <p>+91 7339358148</p>
              </div>
            </div>

            <div className="info-box">
              <img src="/images/loc.png" alt="" />
              <p>
                1, 6th Cross Street,<br />
                Brindavanam,<br />
                Puducherry - 605013
              </p>
            </div>

            <div className="info-box">
              <img src="/images/email.png" alt="" />
              <div>
                <strong>Email</strong>
                <p>ogholidays7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="contact__map">
          <img src="/images/map.png" alt="Map" />
        </div>

      </div>
    </section>
  );
};

export default Contact;
