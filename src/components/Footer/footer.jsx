import React from "react";

import { ReactComponent as LogoWhite } from "../../assets/images/mkwhite.svg";
import FbIcon from "../../assets/icons/facebook-icon.svg";
import LinkedinIcon from "../../assets/icons/linkedin-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import IgIcon from "../../assets/icons/instagram-icon.svg";
import EmailIcon from "../../assets/icons/email-icon.svg";

import "./_footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <LogoWhite className="footer-logo--img" />
          <p className="paragraph-16 footer-subtitle">
            Living, learning, & leveling up one day at a time.
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/krenar.muzaqi"
            className="footer-icons--link"
          >
            <img src={FbIcon} alt="Facebook img" className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/krenarmuzaqi/"
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
            className="footer-icons--link"
          >
            <img src={IgIcon} alt="Instagram img" className="footer-icon" />
          </a>
          <a
            href="https://twitter.com/KrenarMuzaqi"
            className="footer-icons--link"
          >
            <img src={TwitterIcon} alt="Twitter img" className="footer-icon" />
          </a>
          <a
            href="mailto:krenarmuzaqi@gmail.com"
            className="footer-icons--link"
          >
            <img src={EmailIcon} alt="Email img" className="footer-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          <p className="paragraph-12">
            Designed and built with ❤ by Krenar Muzaqi © 2020
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
