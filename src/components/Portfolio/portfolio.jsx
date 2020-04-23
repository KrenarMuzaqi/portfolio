import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import WorkingSvg from "../../assets/images/portfolio-img.png";

import "./_portfolio.scss";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h1 className="title" data-aos="fade-down-right">
          Portfolio
        </h1>
        <img
          src={WorkingSvg}
          alt="wokring img"
          className="porfolio-img"
          data-aos="flip-up"
        />
        <p className="coming-soon" data-aos="flip-down">
          Coming soon...
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
