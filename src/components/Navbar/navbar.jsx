import React, { useState } from "react";
//import { animated, useSpring } from "react-spring";

import { useCurrentWitdh } from "../../media-query/media-query";

import { ReactComponent as LogoWhite } from "../../assets/images/mkwhite.svg";
import { ReactComponent as LogoBlack } from "../../assets/images/mkblack.svg";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const width = useCurrentWitdh();

  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <a href="#header" className="navbar-logo">
          {width < 450 && isToggled && isNavOpen ? (
            <LogoBlack className="navbar-logo--img" />
          ) : (
            <LogoWhite className="navbar-logo--img" />
          )}
        </a>
        <div
          className={`navbar-links  ${isToggled ? "navbar-links--active" : ""}`}
        >
          <a
            href="#header"
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            Home
          </a>
          <a href="#about" className="nav-link" onClick={() => toggleHandler()}>
            About
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            Contact
          </a>
        </div>
        <div className="toggle-wrapper" onClick={() => toggleHandler()}>
          <div id="nav-icon" className={`${isNavOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
