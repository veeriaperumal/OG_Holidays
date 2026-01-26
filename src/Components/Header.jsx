import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
// Make sure to install lucide-react: npm install lucide-react
import { Phone, Search, Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path) => (location.pathname === path ? "active" : "");

  // Toggle function
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Left Side: Contact Info */}
        <div className="top-left">
          <div className="contact-item">
            <img src="/images/headerp.png" alt="Phone" className="header-icon" />
            <span>+91 8754716319</span>
            <span>+91 7339359148</span>
          </div>
          <div className="contact-item">
            <img src="/images/headere.png" alt="Email" className="header-icon" />
            <span>ogholidays7@gmail.com</span>
          </div>
        </div>

        {/* Right Side: Socials */}
        <div className="top-right">
          <div className="social-icons">
            <a href="https://wa.me/message/URO5FLGSHZNON1" className="social-link">
              <img src="/images/whatsapp.png" alt="FB" />
            </a>
            <a href="https://www.instagram.com/og_holidays" className="social-link">
              <img src="/images/insta1.png" alt="IG" />
            </a>
            
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        {/* Logo */}
       <div className="logo">
  <img src="/OG.png" alt="OG Holidays Logo" className="logo-img" />
</div>


        {/* Navigation - Logic added for Mobile Class */}
        <nav className={`nav ${isMobileMenuOpen ? "nav-mobile-active" : ""}`}>
          <Link to="/" className={`nav-link ${isActive("/")}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${isActive("/services")}`} onClick={closeMenu}>
            Services
          </Link>
          <Link to="/packages" className={`nav-link ${isActive("/packages")}`} onClick={closeMenu}>
            Packages
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact")}`} onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>

        {/* Right Actions: Search, Button & Hamburger */}
        <div className="header-actions">
          <div className="search-btn">
            <Search size={18} color="#f2c55a" strokeWidth={2.5} />
          </div>

          <Link to="/contact" className="contact-btn desktop-only">
            <span>Contact Us</span>
            <div className="btn-icon-bg">
              <Phone size={16} fill="#fff" color="#fff" />
            </div>
          </Link>

          {/* Hamburger Menu Button (Visible only on Mobile) */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X size={28} color="#111" />
            ) : (
              <Menu size={28} color="#111" />
            )}
          </button>
        </div>
      </header>
    </>
  );
}