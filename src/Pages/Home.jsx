import "./Home.css";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





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
  const navigate = useNavigate();

  // --- 1. SCROLL FUNCTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

 // --- 2. AUTO SLIDE LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 5000ms (5 seconds)

    // Cleanup function: Clears timer if component unmounts or index changes
    // This prevents "double jumps" when you manually click arrows
    return () => clearInterval(interval);
  }, [index]); 

  // --- 3. MANUAL CONTROLS ---
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

          <button
  type="button"
  className="call-btn"
  onClick={() => navigate("/contact")}
>
  Call Now
</button>
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
         <button
  type="button"
  className="home-search-btn"
  onClick={() => navigate("/services")}
>
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
{/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonial-section">
        {/* TOP */}
        <span className="testimonial-tag">Testimonials</span>
        <h2 className="testimonial-title">What Our Travellers Say</h2>

        {/* CONTAINER FOR ARROWS + CARD */}
        <div className="testimonial-wrapper">
          
          {/* LEFT FLOATING BUTTON */}
          <button className="side-nav-btn left-btn" onClick={prevSlide}>
            <ArrowLeft size={20} />
          </button>

          {/* MAIN CARD */}
          <div className="testimonial-card">
            {/* LEFT COLUMN: IMAGE & NAME */}
            <div className="testimonial-img-container">
               {/* Dotted Border Wrapper */}
               <div className="img-border-dashed">
                  <img src={current.image} alt={current.name} className="testimonial-main-img" />
               </div>
               
               {/* NAME MOVED HERE - Directly under the image */}
               <h3 className="testimonial-name-large">{current.name}</h3>
               
               {/* Optional Subtitle (e.g. "Honeymoon Trip") */}
               {current.subtitle && <p className="testimonial-sub-small">{current.subtitle}</p>}
            </div>

            {/* RIGHT COLUMN: CONTENT */}
            <div className="testimonial-content">
              <span className="quote-icon-large">“</span>
              
              <p className="testimonial-text">{current.text}</p>
              
              <div className="quote-icon-bottom">”</div>

              <div className="testimonial-stars">★ ★ ★ ★ ★</div>
            </div>
          </div>

          {/* RIGHT FLOATING BUTTON */}
          <button className="side-nav-btn right-btn" onClick={nextSlide}>
             <ArrowRight size={20} />
          </button>
        </div>
        
        {/* BOTTOM NAV PILL */}
        <div className="testimonial-nav">
          <div className="nav-pill">
            <button className="nav-btn" onClick={prevSlide}>
              <ArrowLeft size={24} strokeWidth={2.5} />
            </button>
            <button className="nav-btn" onClick={nextSlide}>
              <ArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
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
        <img src="/images/stat2.png" alt="Travellers" />
      </div>
      <h3>1000+</h3>
      <p>
        Happy Travellers and <br /> Counting
      </p>
    </div>

    {/* CARD 3 */}
    <div className="stat-card">
      <div className="stat1">
        <img src="/images/stat3.png" alt="Satisfaction" />
      </div>
      <h3>+98%</h3>
      <p>Customer Satisfaction Rate</p>
    </div>
  </div>
</section>

  <section id="contact" className="contact">
    <div className="contact__container">

      {/* IMAGE */}
      <div className="contact__image">
        <img
          src="/images/phone.png"
          alt="OG Holidays App"
          className="contact__image-img"
        />
      </div>

      {/* CONTENT */}
      <div className="contact__content">
        <h2 className="contact__title">Contact Us</h2>

        <div className="contact__item">
          <div className="contact__icon">
            <img src="/images/support.png" alt="Support" />
          </div>
          <div>
            <h4>Customer Support</h4>
            <p>Get 24/7 assistance for all your travel needs</p>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__icon">
            <img src="/images/price.png" alt="Best Price" />
          </div>
          <div>
            <h4>Best Price Guarantee</h4>
            <p>Enjoy competitive prices and exclusive offers</p>
          </div>
        </div>

        <div className="contact__item">
          <div className="contact__icon">
            <img src="/images/desti.png" alt="Destinations" />
          </div>
          <div>
            <h4>Wide Destination Choice</h4>
            <p>Choose from stunning global destinations</p>
          </div>
        </div>
<button
  className="contact__btn"
  onClick={() =>{window.scrollTo(0, 0); 
  navigate("/contact");}}
>
  Contact Now
</button>

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
<button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>
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
 {/* NEWSLETTER SECTION */}
<section className="newsletter">
  <div className="newsletter__container">
    <div className="newsletter__box">
      
      <h3 className="newsletter__title">
        Subscribe for <br /> Latest Newsletter
      </h3>

      <form
        className="newsletter__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          className="newsletter__input"
          placeholder="Your Email Address"
          required
        />
        <button type="submit" className="newsletter__btn">
          Subscribe
        </button>
      </form>

    </div>
  </div>
</section>

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
  <a href="tel:+917339358148" className="floating-btn phone-btn">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  </a>
</div>
        
    </section>






    </section>
    
  );
}
