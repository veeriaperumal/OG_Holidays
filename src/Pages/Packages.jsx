import React from 'react';
import './Packages.css';

const Packages = () => {
  const packagesData = [
    {
      bgImage: "/images/manali1.png",
      price: "5,999",
      duration: "4N / 5D",
      inclusions: [
        { label: "Bus Ticket", icon: "/images/bus.png" },
        { label: "Hotel Stay", icon: "/images/hotal.png" },
        { label: "Food", icon: "/images/food.png" },
        { label: "Pvt Cab", icon: "/images/cab.png" },
        { label: "1 hour thai massage", icon: "/images/massage.png" },
        { label: "Tamil Support 24/7", icon: "/images/support1.png" },
      ]
    },
    {
      bgImage: "/images/malaysia.png",
      price: "19,999",
      duration: "3N / 4D",
      inclusions: [
        { label: "Airport Transfer", icon: "/images/bus.png" },
        { label: "Genting Cable Car", icon: "/images/cab.png" },
        { label: "Breakfast", icon: "/images/food.png" },
        { label: "Batu Caves", icon: "/images/massage.png" },
        { label: "KL City Tour", icon: "/images/hotal.png" },
        { label: "Sunway Lagoon", icon: "/images/support1.png" },
      ]
    },
    {
      bgImage: "/images/bali1.png",
      price: "24,999",
      duration: "4N / 5D",
      inclusions: [
        { label: "3 Star Property", icon: "/images/star.png" },
        { label: "Daily Meals", icon: "/images/meals.png" },
        { label: "Private Sightseeing", icon: "/images/private.png" },
        { label: "Uluwatu Temple", icon: "/images/temple.png" },
        { label: "Kelingking Beach", icon: "/images/beach.png" },
        { label: "Broken Beach", icon: "/images/broken.png" },
        { label: "Angel Billabong", icon: "/images/pool.png" },
        { label: "Tirta Gangga", icon: "/images/fount.png" },
        { label: "Lempuyang Temple", icon: "/images/gate.png" },
      ]
    },
  {
    location: "VIETNAM",
    price: "29,999",
    duration: "4N / 5D",
    bgImage: "/images/vietnambg.png",
    inclusions: [
      { label: "3 Star Property", icon: "/images/star.png" },
      { label: "PVT Sightseeing", icon: "/images/cab.png" },
      { label: "Meals Includes", icon: " /images/meal.png" },
      { label: "Hanoi City Tour", icon: "/images/gate.png" },
      { label: "Ha Long Bay Cruise", icon: "/images/boat.png" },
      { label: "Ninh Binh Landscapes", icon: "/images/land.png" }
    ]
  },
  {
    location: "SRI LANKA",
    price: "24,999",
    duration: "4N / 5D",
    bgImage: "/images/srilankabg.png",
    inclusions: [
      { label: "3 Star Property", icon: "/images/star.png" },
      { label: "Full Meals", icon: "/images/meals.png" },
      { label: "PVT Cab", icon: "/images/cab.png" },
      { label: "Kandy", icon: "/images/gate.png" },
      { label: "Colombo", icon: "/images/colomb.png" },
      { label: "Bentota", icon: "/images/beach.png" },
      { label: "Nuwara Eliya", icon: "/images/mountain.png" }
    ]
  },
  {
    location: "THAILAND",
    price: "19,999",
    duration: "3N / 4D",
    bgImage: "/images/thailandbg.png",
    inclusions: [
      { label: "Breakfast", icon: "/images/meal.png" },
      { label: "Airport Pickup", icon: "/images/bus.png" },
      { label: "Alcazar Show", icon: "/images/show.png" },
      { label: "Coral Island", icon: "/images/island.png" },
      { label: "Safari World Park", icon: "/images/safari.png" },
      { label: "City Tour", icon: "/images/tour.png" }
    ]
  },
  {
    location: "DUBAI",
    price: "34,999",
    duration: "4N / 5D",
    bgImage: "/images/dubaibg.png",
    inclusions: [
      { label: "4 Star Stay", icon: "/images/4star.png" },
      { label: "Dhow Cruise", icon: "/images/boat.png" },
      { label: "Burji Khalifa", icon: "/images/colomb.png" },
      { label: "Belly Dance", icon: "/images/dance.png" },
      { label: "BAPS Temple", icon: "/images/gate.png" },
      { label: "Meals", icon: "/images/food.png" },
      { label: "Desert Safari", icon: "/images/desert.png" },
      { label: "Dubai Frame", icon: "/images/frame.png" }
    ]
  }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Packages</h1>
        <p>Choose from our customized holiday packages designed for comfort, value, and unforgettable journeys</p>
      </header>

      <div className="grid">
        {packagesData.map((pkg, i) => (
          <div className="card" key={i}>
            {/* CLEAN BANNER: No Overlay, No Extra Title Image */}
            <div 
              className="banner" 
              style={{ backgroundImage: `url(${pkg.bgImage})` }}
            >
            </div>

            <div className="details">
              <div className="row">
                <div className="col">
                  <span className="tag">JUST</span>
                  <span className="price">₹ {pkg.price}/-</span>
                </div>
                <div className="col right">
                  <span className="tag">DURATION</span>
                  <span className="price-yellow">{pkg.duration}</span>
                </div>
              </div>

              <div className="inc-section">
                <p className="inc-title">Package Includes</p>
                <div className="inc-grid">
                  {pkg.inclusions.map((item, idx) => (
                    <div className="inc-item" key={idx}>
                      <div className="circle"><img src={item.icon} alt={item.label} /></div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
  <a href="tel:+91 7339358148" className="floating-btn phone-btn">
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  </a>
</div>
    </div>
  );
};

export default Packages;