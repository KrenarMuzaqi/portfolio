import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { ReactComponent as LogoWhite } from "../../assets/images/mkwhite.svg";
import FbIcon from "../../assets/icons/facebook-icon.svg";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import IgIcon from "../../assets/icons/instagram-icon.svg";
import EmailIcon from "../../assets/icons/email-icon.svg";

import "./_footer.scss";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo" data-aos="zoom-in">
          <LogoWhite className="footer-logo--img" />
          <p className="paragraph-16 footer-subtitle">
            Living, learning, & leveling up one day at a time.
          </p>
        </div>
        <div className="footer-icons" data-aos="zoom-in">
          <a
            href="https://www.facebook.com/krenar.muzaqi"
            target="_blank"
            className="footer-icons--link"
          >
            <img src={FbIcon} alt="Facebook img" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/krenarmuzaqi/"
            target="_blank"
            className="footer-icons--link"
          >
            <img
              src={LinkedinIcon}
              alt="Linkedin img"
              className="footer-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/krenar.dev/"
            target="_blank"
            className="footer-icons--link"
          >
            <img src={IgIcon} alt="Instagram img" className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/KrenarMuzaqi"
            target="_blank"
            className="footer-icons--link"
          >
            <img src={TwitterIcon} alt="Twitter img" className="footer-icon" />
          </a>
          <a
            href="mailto:krenarmuzaqi@gmail.com"
            target="_blank"
            className="footer-icons--link"
          >
            <img src={EmailIcon} alt="Email img" className="footer-icon" />
          </a>
        </div>
        <div className="footer-copyright" data-aos="zoom-in">
          <p className="paragraph-12">
            Designed and built with ❤ by Krenar Muzaqi © 2020
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
