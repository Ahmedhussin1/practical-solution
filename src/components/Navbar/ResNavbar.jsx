import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./ResNavbarStyle.scss";
import FourthButton from "../Buttons/Btn-4/FourthButton";

const ResNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="res-navbar">
      <div className="nav-container">
        <div className="res-nav-logo">
          <img src="../../../dist/assets/logo-png.png" />
        </div>

        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className={`res-contact-btn ${showNavbar && "active"}`}>
          <FourthButton title={"TALK TO US"} link={"/contact"} />
          {/* <a href="/contact" className="res-btn res-btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            CONTACT US
          </a> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CiMenuFries color="white" />
        </div>
      </div>
    </nav>
  );
};

export default ResNavbar;
