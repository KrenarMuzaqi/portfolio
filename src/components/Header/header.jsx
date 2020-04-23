import React, { useEffect } from "react";
import Particles from "react-particles-js";

import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";

import { ReactComponent as Photo } from "../../assets/images/carton-grey.svg";

import "./_header.scss";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
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
        <div className="header-content--text" data-aos="fade-right">
          <h1 className="title">Frontend Developer</h1>
          <p className="subtitle m-t-8">Hi, I'm Krenar.</p>
          <p className="subtitle">
            I'm a Frontend Developer based in München, Germany.
          </p>
          <div className="buttons">
            <Link
              to="about"
              smooth={true}
              offset={0}
              duration={500}
              className="btn"
            >
              Learn More
              <i className="mdi mdi-transfer-down"></i>
            </Link>
          </div>
        </div>
        <div className="header-content--img tooltip" data-aos="fade-left">
          <span className="tooltip-content">Let's talk!</span>
          <Photo className="carton-img "></Photo>
        </div>
      </div>
    </div>
  );
};

export default Header;
