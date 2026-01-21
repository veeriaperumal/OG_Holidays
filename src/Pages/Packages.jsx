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
    </div>
  );
};

export default Packages;