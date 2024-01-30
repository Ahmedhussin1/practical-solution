import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./MobileNavTwo.scss";
export default function MobileNavTwo() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src="../../../dist/assets/logo-png.png"
        className="Logo"
        alt="logo"
      />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <a href="/">Home</a>
            <a href="/landing-page">Landing Page</a>
            <a href="/about">About</a>
            <a href="#">Services</a>
            <a href="/work">Work</a>
          {/* <button>Logout</button> */}
            <a href="/contact" className="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              CONTACT US
            </a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
