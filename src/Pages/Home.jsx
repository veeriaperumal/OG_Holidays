import "./Home.css";
import { Send } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Arjun & Meera",
    subtitle: "",
    image: "/images/testimonial1.png",
    text: `Our couple trip was wonderfully planned with comfortable stays and flexible schedules. OG Holidays listened to our preferences and customised everything accordingly. The travel support was quick, friendly, and reliable. We explored so many places without any stress. A fantastic holiday experience overall`,
  },
  {
    name: "Sanjay & Kavya",
    subtitle: "",
    image: "/images/testimonial2.png",
    text: `We loved how perfectly OG Holidays organised our romantic vacation. The itinerary had a great mix of relaxation and sightseeing. Every detail was handled smoothly, making the trip enjoyable from the first day to the last. A truly beautiful experience for us as a couple`,
  },
  {
    name: "Varun Family",
    subtitle: "Family Vacation",
    image: "/images/testimonial3.png",
    text: `Our family trip was extremely smooth and comfortable thanks to OG Holidays. The team suggested kid-friendly spots, activities, and hotels that made our travel easy. Everything was organised well, and we never faced any issues. A very happy and memorable family holiday`,
  },
  {
    name: "Mahesh & Friends",
    subtitle: "Group Trip",
    image: "/images/testimonial4.png",
    text: `Our friends’ group trip was handled perfectly. OG Holidays arranged great hotels, transport, and activities that suited everyone. The coordination was excellent, and the experience felt effortless. We enjoyed every moment without worrying about planning or logistics. Amazing trip`,
  },
  {
    name: "College Friends Group",
    subtitle: "",
    image: "/images/testimonial5.png",
    text: `Our college reunion trip was unforgettable! OG Holidays managed everything—from transport to stays—perfectly. The itinerary suited everyone in the group, and the coordination was excellent. We had an exciting, fun-filled holiday together without any travel worries`,
  },
  {
  name: "Karthik",
  subtitle: "",
  image: "/images/testimonial6.png",
  text: `My backpacking trip was smooth, budget-friendly, and well-organised.
  OG Holidays helped me choose the right stay options and activities.
  The team offered quick assistance whenever needed.
  I enjoyed a stress-free, memorable adventure thanks to their planning`,
}

];
const faqs = [
    {
      q: "What services does OG Holidays offer?",
      a: "OG Holidays provides customised holiday packages, hotel bookings, flight arrangements, travel itineraries, visa assistance, and full travel support. We help you plan and enjoy a complete, stress-free vacation."
    },
    {
      q: "How do I book a holiday package?",
      a: "You can contact us through WhatsApp, call, Instagram, or our website. Share your travel dates, destination, and budget — our team will prepare a personalised plan and confirm your booking easily."
    },
    {
      q: "Are the holiday packages customisable?",
      a: "Yes! All our packages can be customised based on your budget, travel style, number of days, and activities. We design the trip exactly the way you want it."
    },
    {
      q: "Do you offer international travel packages?",
      a: "Absolutely. We provide domestic and international holiday packages including Dubai, Maldives, Bali, Singapore, Thailand, Europe, and many more popular destinations."
    },
    {
      q: "What if I need support during my trip?",
      a: "Our team provides 24/7 customer support. You can contact us anytime during your journey for help with hotel check-in, transportation, activity changes, or any travel assistance."
    }
  ];

export default function Home() {
      const [index, setIndex] = useState(0);
      const [active, setActive] = useState(0);
  const current = testimonials[index];

  // --- 1. SCROLL FUNCTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="home">
      <div className="home-container">
        {/* LEFT CONTENT */}
        <div className="home-content">
          <span className="home-tagline">Relax & Enjoy the Vacation</span>

          <h1 className="home-title">
            Explore The Most <br />
            Stunning <br />
            Destinations With <br />
            <span>OG Holidays</span>
          </h1>

          <p className="home-desc">
            Find your dream trip with OG Holidays. We offer personalised plans,
            expert guidance, and easy, hassle-free travel.
          </p>

          <button className="call-btn">Call Now</button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="home-images">
          <div className="img-col">
            <img src="/images/group1.png" className="img-small" />
            <img src="/images/group3.png" className="img-small" />
          </div>

          <div className="img-large-wrapper">
            <img src="/images/group2.png" className="img-large" />

            {/* JOIN NOW CIRCLE */}
            <div className="join-circle">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="
                      M 50, 50
                      m -35, 0
                      a 35,35 0 1,1 70,0
                      a 35,35 0 1,1 -70,0
                    "
                  />
                </defs>
                <text>
                  <textPath href="#circlePath">
                    Join Now • Join Now • Join Now •
                  </textPath>
                </text>
              </svg>

              <div className="join-icon">
                <Send size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* HOME ABOUT SECTION */}
      <section id="about" className="home-about-section">
        {/* SEARCH BAR */}
        <div className="home-search-bar">
          <input type="text" placeholder="Type Of Venue / Choose Destination*" />
          <input type="date" />
          <input type="text" placeholder="Select Travellers*" />
          <button className="home-search-btn">
            Search <span>→</span>
          </button>
        </div>

        <div className="home-about-container">
          {/* LEFT */}
          <div className="home-about-left">
            <img
              src="/images/About.png"
              alt="About"
              className="about-main-img"
            />

            {/* EXACT INFO CARD */}
            <div className="about-info-card">
              <div className="card-top">
                <h3>1000+</h3>

                <svg
                  className="growth-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 14L10 8L14 12L20 6"
                    stroke="#6BCF63"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 6H20V11"
                    stroke="#6BCF63"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="card-text">
                Trusted by happy travellers who love our curated holiday
                experiences
              </p>

              <div className="card-divider"></div>

              <div className="avatar-row">
                <img src="/images/a1.png" />
                <img src="/images/a2.png" />
                <img src="/images/a3.png" />
                <img src="/images/a4.png" />
                <img src="/images/a5.png" />
                <img src="/images/a2.png" />
                <img src="/images/a4.png" />
                <img src="/images/a5.png" />
              </div>
            </div>

            <img
              src="/images/abouts.png"
              alt="About small"
              className="about-small-img"
            />
          </div>

          {/* RIGHT */}
          <div className="home-about-right">
            <span className="about-subtitle">Get About Us</span>
            <h2>More About Travelsy</h2>

            <p>
              OG Holidays is your trusted travel partner, offering personalised
              holiday plans, expert guidance, and exclusive deals to make every
              trip smooth and memorable. We create tailored itineraries based on
              your interests, budget, and travel style, ensuring a hassle-free
              experience from planning to return.
              <br />
              <br />
              With dedicated support and curated destination insights, we’re
              here to turn your dream vacations into unforgettable journeys.
            </p>

            <button className="about-read-btn">
              Read More <span>→</span>
            </button>
          </div>
        </div>
      </section>
     <section id="testimonials" className="testimonial-section">
      {/* TOP */}
      <span className="testimonial-tag">Testimonials</span>
      <h2 className="testimonial-title">What Our Travellers Say</h2>

      {/* CARD */}
      <div className="testimonial-card">
        {/* LEFT ARROW */}
        <div className="testimonial-arrow arrow-left" onClick={prevSlide}>
          ←
        </div>

        {/* IMAGE */}
        <div className="testimonial-img">
          <img src={current.image} alt={current.name} />
        </div>

        {/* CONTENT */}
        <div className="testimonial-content">
          <span className="quote-left">“</span>

          <p className="testimonial-text">{current.text}</p>

          <span className="quote-right">”</span>

          <div className="testimonial-stars">★ ★ ★ ★ ★</div>

          <div className="testimonial-name">{current.name}</div>

          {current.subtitle && (
            <div className="testimonial-sub">{current.subtitle}</div>
          )}
        </div>

        {/* RIGHT ARROW */}
        <div className="testimonial-arrow arrow-right" onClick={nextSlide}>
          →
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="testimonial-nav">
        <span>
          {index + 1} / {testimonials.length}
        </span>
      </div>
    </section>
    <section className="stats-section">
  <div className="stats-container">
    {/* CARD 1 */}
    <div className="stat-card">
      <div className="stat1">
        <img src="/images/stat1.png" alt="Destinations" />
      </div>
      <h3>10+</h3>
      <p>
        Dream Destinations Across <br /> the Globe
      </p>
    </div>

    {/* CARD 2 */}
    <div className="stat-card">
      <div className="stat1">
        <img src="/images/stat1.png" alt="Travellers" />
      </div>
      <h3>1000+</h3>
      <p>
        Happy Travellers and <br /> Counting
      </p>
    </div>

    {/* CARD 3 */}
    <div className="stat-card">
      <div className="stat1">
        <img src="/images/stat1.png" alt="Satisfaction" />
      </div>
      <h3>+98%</h3>
      <p>Customer Satisfaction Rate</p>
    </div>
  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-container">
    {/* LEFT – PHONE IMAGE */}
    <div className="contact-left">
      <img
        src="/images/phone.png"
        alt="OG Holidays App"
        className="contact-phone-img"
      />
    </div>

    {/* RIGHT – CONTENT */}
    <div className="contact-right">
      <h2>Contact Us</h2>

      <div className="contact-item">
        <div className="contact-icon">
          <img src="/images/support.png" alt="Support" />
        </div>
        <div>
          <h4>Customer Support</h4>
          <p>
            Get 24/7 assistance for all your travel needs with quick and
            reliable support
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          {/* <img src="/images/icon-price.png" alt="Best Price" /> */}
        </div>
        <div>
          <h4>Best Price Guarantee</h4>
          <p>
            Enjoy the best deals with competitive prices and exclusive travel
            offers
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          {/* <img src="/images/icon-destination.png" alt="Destinations" /> */}
        </div>
        <div>
          <h4>Wide Destination Choice</h4>
          <p>
            Choose from a wide range of stunning global destinations tailored
            to your travel style
          </p>
        </div>
      </div>

      <button className="contact-btn">Contact Now</button>
    </div>
  </div>
</section>
<section className="love-section">
  <div className="love-container">
    {/* LEFT – IMAGE GRID */}
    <div className="love-images">
      <div className="love-col small-col">
        <img src="/images/love1.png" alt="Travel" />
        <img src="/images/love2.png" alt="Travel" />
      </div>

      <div className="love-col large-col">
        <img src="/images/love3.png" alt="Group Trip" />
      </div>
    </div>

    {/* RIGHT – CONTENT */}
    <div className="love-content">
      <h2>What Travellers Love About Us</h2>

      <h4>Adventures That Make You Smile</h4>
      <span className="love-subtitle">Group Trip – Goa</span>

      <p>
        Best group trip ever! OG Holidays planned everything—stay, activities,
        nightlife spots—exactly how we wanted. Zero stress, just pure fun from
        start to finish. We’re already planning our next trip with them!
        <br /><br />
        The memories we made together will stay with us forever, and every part
        of the journey felt perfectly organised. It was the ideal mix of fun,
        relaxation, and unforgettable moments, truly the best group travel
        experience we’ve ever had.
      </p>

      <button className="love-arrow-btn">→</button>
    </div>
  </div>
</section>
<section
  className="cta-banner"
  style={{ backgroundImage: "url(/images/image.png)" }}
>
  <div className="cta-overlay">
    <div className="cta-content">
      <h2>
        Dreaming of a Trip? Let <br /> Us Make It Happen!
      </h2>

      <p>
        From domestic escapes to international adventures,
        we plan every detail with care
      </p>

      <button className="cta-btn">
        Book Now <span>→</span>
      </button>
    </div>
  </div>
</section>
 <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-box">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <div className="faq-header">
              <span className="faq-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4>{item.q}</h4>

              <span className="faq-icon">
                {active === index ? "×" : "+"}
              </span>
            </div>

            {active === index && (
              <p className="faq-answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    <section className="footer-section">
  {/* NEWSLETTER */}
  <div className="newsletter-box">
    <h3>
      Subscribe for <br /> Latest Newsletter
    </h3>

    <div className="newsletter-form">
      <input type="email" placeholder="Your Email Address" />
      <button>Subscribe</button>
    </div>
  </div>

  {/* FOOTER CONTENT */}
  <div className="footer-content">
    {/* BRAND */}
    <div className="footer-brand">
      <h2>
        <span>OG</span> Holidays
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
    <img src="/images/fac.png" alt="Facebook" />
  </div>
  <div className="footer-social-icon">
    <img src="/images/twit.png" alt="Twitter" />
  </div>
  <div className="footer-social-icon">
    <img src="/images/you.png" alt="YouTube" />
  </div>
  <div className="footer-social-icon">
    <img src="/images/insta1.png" alt="Instagram" />
  </div>
</div>
    </div>

  {/* --- 2. UPDATED QUICK LINKS WITH SCROLL --- */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollToSection("about")}>About Us</li>
              <li onClick={() => scrollToSection("/services")}>Services</li>
              <li onClick={() => scrollToSection("packages")}>Packages</li>
              <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
              <li onClick={() => scrollToSection("contact")}>Contact Us</li>
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
      <p className="footer-contact-text">+1 12345 67890</p>
    </div>

    {/* Email */}
    <div className="footer-contact-item">
      <img
        src="/images/email1.png"
        alt="Email"
        className="footer-contact-icon"
      />
      <p className="footer-contact-text">example@gmail.com</p>
    </div>

    {/* Location */}
    <div className="footer-contact-item">
      <img
        src="/images/map1.png"
        alt="Location"
        className="footer-contact-icon"
      />
      <p className="footer-contact-text">
        1014 N Main St, Miami, Oklahoma, 74354, United States
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





    </section>
    
  );
}
