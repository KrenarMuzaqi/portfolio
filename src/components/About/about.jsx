import React from "react";

import AboutImage from "../../assets/images/about-img.jpg";

import "./_about.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <h1 className="title">About Me</h1>
        <div className="about-container--text">
          <div>
            <p className="paragraph-16">
              My name is Krenar. I'am a Frontend Developer based in München,
              Germany.
            </p>
            <p className="paragraph-16 m-t-8">
              I have 1+ years of extensive professional experience and skills in
              HTML5, CSS3, Javascript, React, jQuery, Bootstrap 3 & 4,
              SASS/SCSS, BEM, 7-1 pattern, and converting PSD to HTML5 with keen
              attention to details. Always up for learning new things.
            </p>

            <div>
              <p className="paragraph-16 m-t-16">
                In all projects, I was responsible for implementing all the
                HTML, CSS and JS for interactions. This process involved:
              </p>
              <ul className="portfolio-list">
                <li>
                  Analyzing and dividing design mockups for creating appropriate
                  UI components and architecting the styles codebase.
                </li>
                <li>
                  Testing code in multiple browsers to ensure cross-browser
                  compatibility.
                </li>
                <li>Following coding styles if required.</li>
                <li>
                  Leveraging responsive web frameworks to consistently complete
                  product deliverables ahead of schedule.
                </li>
                <li>
                  Collaborating with UI/UX designers and Back End Developers.
                </li>
              </ul>
            </div>

            <p className="paragraph-18 m-t-12 txt-bold">Qualifications:</p>
            <p className="paragraph-16 m-t-8">
              B.Sc. Computer Engineering University "Isa Boletini"
            </p>
            <p className="paragraph-14">(Oct. 2013 - Oct. 2019)</p>

            <a
              href="https://drive.google.com/open?id=1ZpT-lTbD-X5FhZvn4d3oXV64PjZUhMdQ"
              target="_blank"
              className="resume-btn"
            >
              VIEW CV
            </a>
          </div>
          <img src={AboutImage} alt="Krenar Img" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
