import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
// Make sure to install lucide-react: npm install lucide-react
import { Phone, Search, Mail } from "lucide-react";

export default function Header() {
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        {/* Left Side: Contact Info */}
        <div className="top-left">
          <div className="contact-item">
            {/* Add header-phone.png to your public/images folder */}
            <img src="/images/headerp.png" alt="Phone" className="header-icon" />
            <span>+1 1234567890</span>
          </div>
          <div className="contact-item">
            {/* Add header-email.png to your public/images folder */}
            <img src="/images/headere.png" alt="Email" className="header-icon" />
            <span>example@gmail.com</span>
          </div>
        </div>

        {/* Right Side: Black Slanted Bar & Socials */}
        <div className="top-right">
          
          <div className="social-icons">|
            <a href="#" className="social-link">
              <img src="/images/fac.png" alt="FB" />
            </a>
            <a href="#" className="social-link">
              <img src="/images/insta1.png" alt="IG" />
            </a>
            <a href="#" className="social-link">
              <img src="/images/you.png" alt="YT" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        {/* Logo */}
        <div className="logo">
          <span className="og">Og</span>
          <span className="holidays">Holidays</span>
        </div>

        {/* Navigation with Dynamic Active State */}
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive("/")}`}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${isActive("/services")}`}>
            Services
          </Link>
          <Link to="/packages" className={`nav-link ${isActive("/packages")}`}>
            Packages
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
            Contact Us
          </Link>
        </nav>

        {/* Right Actions: Search & Button */}
        <div className="header-actions">
          <div className="search-btn">
            <Search size={18} color="#f2c55a" strokeWidth={2.5} />
          </div>

          <Link to="/contact" className="contact-btn">
            <span>Contact Us</span>
            <div className="btn-icon-bg">
                <Phone size={16} fill="#fff" color="#fff" />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}