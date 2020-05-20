import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./_portfolio.scss";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-content">
        <h1 className="title" data-aos="fade-right">
          Portfolio
        </h1>

        <div className="portfolio-boxs">
          <div className="portfolio--box" data-aos="fade-right">
            <div className="portfolio-img fylo-img"></div>
            <div className="project-title">
              <h1>Fylo Landing Page</h1>
              <span>HTML/SCSS</span>
            </div>
            <p className="project-description">My project</p>
            <div className="project-btn">
              <a
                href="https://coding-tips.github.io/Fylo/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-left">
            <div className="portfolio-img budget-app_img"></div>
            <div className="project-title">
              <h1>Budget App</h1>
              <span>React/HTML/SCSS</span>
            </div>
            <p className="project-description">My project</p>
            <div className="project-btn">
              <a
                href="https://km-budget-app.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-right">
            <div className="portfolio-img todo-list_img"></div>
            <div className="project-title">
              <h1>Todo List</h1>
              <span>React/HTML/SCSS</span>
            </div>
            <p className="project-description">My project</p>
            <div className="project-btn">
              <a
                href="https://todo-list-km.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-left">
            <div className="portfolio-img contact-manager_img"></div>
            <div className="project-title">
              <h1>Contact Manager</h1>
              <span>React/HTML/BOOTSTRAP</span>
            </div>
            <p className="project-description">My project</p>
            <div className="project-btn">
              <a
                href="https://contact-manager-km.netlify.app/#/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
