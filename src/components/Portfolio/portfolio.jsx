import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import MusicAppImg from "../../assets/images/music-app-mockup.png";
import LibertyImg from "../../assets/images/statue-of-liberty--mockup.png";
import FitnessPrimeImg from "../../assets/images/fitness-prime.png";
import SecureVpnImg from "../../assets/images/secure-vpn-mockup.png";
import Movement4 from "../../assets/images/movement4-mockup.png";
import Fylo from "../../assets/images/fylo-mockup.png";

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
            <div className="portfolio-img movement4_img">
              <img src={Movement4} alt="Movement4 img" />
            </div>
            <div className="project-title">
              <h1>MOVEMENT4</h1>
              <span>HTML / SCSS / JS</span>
            </div>
            <p className="project-description">Upwork Project</p>
            <div className="project-btn">
              <a
                href="https://www.movement4.com.au/"
                target="_blank"
                className="view-btn "
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-left">
            <div className="portfolio-img fylo-img">
              <img src={LibertyImg} alt="" />
            </div>
            <div className="project-title">
              <h1>Statue of Liberty Tour</h1>
              <span>HTML / SCSS / JS</span>
            </div>
            <p className="project-description">Upwork Project</p>
            <div className="project-btn">
              <a
                href="https://statue-of-liberty-tour.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-right">
            <div className="portfolio-img budget-app_img">
              <img src={MusicAppImg} alt="music app img" />
            </div>
            <div className="project-title">
              <h1>Music App</h1>
              <span>HTML / SCSS / JS</span>
            </div>
            <p className="project-description">Upwork Project</p>
            <div className="project-btn">
              <a
                href="https://music-app-km.netlify.app/"
                target="_blank"
                className="view-btn "
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-left">
            <div className="portfolio-img ">
              <img src={FitnessPrimeImg} alt="Fitness Prime img" />
            </div>
            <div className="project-title">
              <h1>Fitness Prime - Platform</h1>
              <span>HTML / SCSS / JS</span>
            </div>
            <p className="project-description">Upwork Project</p>
            <div className="project-btn">
              <a
                href="https://fitness-prime.netlify.app/"
                target="_blank"
                className="view-btn "
              >
                View
              </a>
            </div>
          </div>

          <div className="portfolio--box" data-aos="fade-right">
            <div className="portfolio-img fitness-prime_img">
              <img src={SecureVpnImg} alt="Secure VPN img" />
            </div>
            <div className="project-title">
              <h1>Secure VPN</h1>
              <span>HTML / SCSS / Bootstrap</span>
            </div>
            <p className="project-description">Upwork Project</p>

            <div className="project-btn">
              <a
                href="https://secure-vpn.netlify.app/"
                target="_blank"
                className="view-btn"
              >
                View
              </a>
            </div>
          </div>
          <div className="portfolio--box" data-aos="fade-left">
            <div className="portfolio-img fitness-prime_img">
              <img src={Fylo} alt="Fylo img" />
            </div>
            <div className="project-title">
              <h1>Fylo</h1>
              <span>HTML / SCSS</span>
            </div>
            <p className="project-description">Project</p>

            <div className="project-btn">
              <a
                href="https://fylo-km.netlify.app/"
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
