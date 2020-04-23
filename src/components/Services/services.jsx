import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import DevelopmentIcon from "../../assets/icons/web-development.svg";
import ResponsiveIcon from "../../assets/icons/responsive-design.svg";
import EmailIcon from "../../assets/icons/email-development.svg";
import SupportIcon from "../../assets/icons/support.svg";

import "./_services.scss";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="services" id="services">
      <div className="services-container">
        <h1 className="title" data-aos="fade-right">
          Services
        </h1>

        <div className="services-boxs">
          <div className="services-boxs--box" data-aos="fade-right">
            <img
              src={DevelopmentIcon}
              className="service-icon"
              alt="development icon img"
            />
            <h4 className="box-title">Web Development</h4>
            <p className=" m-t-16 box-desc">
              Able to create beautiful sites by using HTML, CSS, JS
            </p>
          </div>
          <div className="services-boxs--box" data-aos="fade-left">
            <img
              src={ResponsiveIcon}
              className="service-icon"
              alt="responsive icon img"
            />
            <h4 className="box-title">Responsive design</h4>
            <p className=" m-t-16 box-desc">
              Able to create mobile responsive sites at a professional level
            </p>
          </div>
          <div className="services-boxs--box" data-aos="fade-right">
            <img
              src={EmailIcon}
              className="service-icon"
              alt="email icon img"
            />
            <h4 className="box-title"> Email Development</h4>
            <p className="m-t-16 box-desc">
              Able to create HTML EMAILS quickly and effective
            </p>
          </div>
          <div className="services-boxs--box" data-aos="fade-left">
            <img
              src={SupportIcon}
              className="service-icon"
              alt="support icon img"
            />
            <h4 className="box-title">Strong support</h4>
            <p className="m-t-16 box-desc">
              Able to communicate ideas in a brief way
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
