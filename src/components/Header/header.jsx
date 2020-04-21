import React from "react";
import Particles from "react-particles-js";

import { ReactComponent as Photo } from "../../assets/images/carton-grey.svg";

import "./_header.scss";

const Header = () => (
  <div className="header" id="header">
    <Particles
      className="header-animation"
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
    <div className="header-content">
      <div className="header-content--text">
        <h1 className="title">Frontend Developer</h1>
        <p className="subtitle m-t-8">Hi, I'm Krenar.</p>
        <p className="subtitle">
          I'm a Frontend Developer based in München, Germany.
        </p>
        <div className="buttons">
          <a href="#about" className="btn">
            Learn More
            <i className="mdi mdi-transfer-down"></i>
          </a>
          <a className="btn" href="mailto: krenarmuzaqi@gmail.com">
            Contact
            <i className="mdi mdi-email-outline"></i>
          </a>
        </div>
        {/* <div className="icons">
          <a href="mailto:krenarmuzaqi@gmail.com" className="icons-box">
            <i className="mdi mdi-email-outline"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/krenarmuzaqi/"
            target="_blank"
            className="icons-box"
          >
            <i className="mdi mdi-linkedin"></i>
          </a>
        </div> */}
      </div>
      <div className="header-content--img tooltip">
        <span className="tooltip-content">Let's talk!</span>
        <Photo className="carton-img "></Photo>
      </div>
    </div>
  </div>
);

export default Header;
