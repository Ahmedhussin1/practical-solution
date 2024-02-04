import './Navbar.scss'
import React, { useEffect, useState } from "react";
function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Set a threshold value based on your design
      const threshold = 100;
      setIsFixed(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isFixed ? "fixed" : ""}`}>
      {/* logo section */}
      <div className="logo-section">
        <img src="p" />
      </div>

      <div className="link-section">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/offers">
            <li>Offers</li>
          </a>
          <a href="/work">
            <li>Work</li>
          </a>
          <a href="/services">
            <li>Services</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          {/* <a href='#'><li>Contact</li></a> */}
        </ul>
      </div>

      <div
        className={`mobile-menu ${isMobileMenuOpen ? "change" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <a href="/contact" className="btn btn-1">
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        CONTACT US
      </a>
    </div>
  );
}

export default Navbar