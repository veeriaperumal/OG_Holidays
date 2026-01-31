import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <footer className="footer-bottom">
      <section className="footer-section">

        {/* FOOTER CONTENT */}
        <div className="footer-content">
          {/* BRAND */}
        <div className="footer-brand">
  {/* Logo instead of text */}
  <img
    src="/OG.png"
    alt="OG Holidays Logo"
    className="footer-logo"
  />

  <p>
    Delivering perfect holidays <br />
    with comfort, safety, and <br />
    great value
  </p>

  <div className="footer-socials">
    <div className="footer-social-icon">
      <a
        href="https://www.instagram.com/og_holidays"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/insta1.png" alt="Instagram" />
      </a>
    </div>
  </div>
</div>


           <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => navigate("/services")}>Services</li>
        <li onClick={() => navigate("/packages")}>Packages</li>
        <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li onClick={() => navigate("/contact")}>Contact Us</li>
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
         {/* Location */}
<a
  href="https://www.google.com/maps?q=11.940417,79.818639"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none", color: "inherit" }}
>
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
</a>

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
