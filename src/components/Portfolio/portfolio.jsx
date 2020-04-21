import React from "react";

import WorkingSvg from "../../assets/icons/working-portfolio.svg";

import "./_portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h1 className="title">Portfolio</h1>
        <img src={WorkingSvg} alt="wokring img" className="porfolio-svg" />
        <p className="coming-soon ">COMING SOON...</p>
      </div>
    </div>
  );
};

export default Portfolio;
