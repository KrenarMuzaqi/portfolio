import React, { useState } from "react";
import { Link } from "react-scroll";

import { useCurrentWitdh } from "../../media-query/media-query";

import { ReactComponent as LogoWhite } from "../assets/images/mkwhite.svg";
import { ReactComponent as LogoBlack } from "../assets/images/mkblack.svg";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const width = useCurrentWitdh();

  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled(!isToggled);
    setNavOpen(!isNavOpen);
  };

  if (isNavOpen && width <= 1024) {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflowY = "unset";
    document.body.style.paddingRight = "0px";
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link to="header" className="navbar-logo">
          {width < 450 && isToggled && isNavOpen ? (
            <LogoBlack className="navbar-logo--img" />
          ) : (
            <LogoWhite className="navbar-logo--img" />
          )}
        </Link>
        <div
          className={`navbar-links  ${isToggled ? "navbar-links--active" : ""}`}
        >
          <Link
            to="header"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            <span> Home</span>
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            <span>About</span>
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            <span>Services</span>
          </Link>
          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            <span>Portfolio</span>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="nav-link"
            onClick={() => toggleHandler()}
          >
            <span>Contact</span>
          </Link>
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
