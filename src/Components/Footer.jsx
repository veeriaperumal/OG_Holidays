import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-bottom">
      <section className="footer-section">

        {/* FOOTER CONTENT */}
        <div className="footer-content">
          {/* BRAND */}
          <div className="footer-brand">
            <h2>
              <span>OG</span> HOLIDAYS
            </h2>
            <p>
              Delivering perfect holidays <br />
              with comfort, safety, and <br />
              great value
            </p>

            {/* ... inside the footer-brand div ... */}

            <div className="footer-socials">
              {/* Make sure these images exist in public/images/ */}

              <div className="footer-social-icon">
                <a href="https://www.instagram.com/og_holidays" >
                  <img src="/images/insta1.png" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          {/* --- 2. UPDATED QUICK LINKS WITH SCROLL --- */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollToSection("about")}>About Us</li>
              <li onClick={() => scrollToSection("/services")}>Services</li>
              <li onClick={() => scrollToSection("/packages")}>Packages</li>
              <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
              <li onClick={() => scrollToSection("/contact")}>Contact Us</li>
              <li onClick={() => scrollToSection("destinations")}>Destinations</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>

            {/* Phone */}
            <div className="footer-contact-item">
              <img
                src="/images/phone3.png"
                alt="Phone"
                className="footer-contact-icon"
              />
              <p className="footer-contact-text">+91 8754716319
                +91 7339358148</p>
            </div>

            {/* Email */}
            <div className="footer-contact-item">
              <img
                src="/images/email1.png"
                alt="Email"
                className="footer-contact-icon"
              />
              <p className="footer-contact-text">ogholidays7@gmail.com</p>
            </div>

            {/* Location */}
            <div className="footer-contact-item">
              <img
                src="/images/map1.png"
                alt="Location"
                className="footer-contact-icon"
              />
              <p className="footer-contact-text">
                1, 6th Cross Street,
                Brindavanam,<br />
                Puducherry - 605013
              </p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="footer-insta">
            <h4>Follow Us On @instagram</h4>

            <div className="insta-grid">
              <img src="/images/i1.png" />
              <img src="/images/i2.png" />
              <img src="/images/i3.png" />
              <img src="/images/i4.png" />
              <img src="/images/i5.png" />
              <img src="/images/i6.png" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
