import React from "react";

import Slider from "react-slick";

import QUOTES_DATA from "./testimonials-data";

import "./_testimonials.scss";

const Testimonials = () => {
  const quoutes = QUOTES_DATA;

  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h1 className="title">Testimonials</h1>
        <div className="slider">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
          >
            <div className="slider-box">
              <blockquote>{quoutes[0].qoute}</blockquote>
              <p className="name">{quoutes[0].fullName}</p>
              <p className="position">{quoutes[0].position}</p>
              <p className="date">{quoutes[0].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[1].qoute}</blockquote>
              <p className="name">{quoutes[1].fullName}</p>
              <p className="position">{quoutes[1].position}</p>
              <p className="date">{quoutes[1].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[2].qoute}</blockquote>
              <p className="name">{quoutes[2].fullName}</p>
              <p className="position">{quoutes[2].position}</p>
              <p className="date">{quoutes[2].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[3].qoute}</blockquote>
              <p className="name">{quoutes[3].fullName}</p>
              <p className="position">{quoutes[3].position}</p>
              <p className="date">{quoutes[3].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[4].qoute}</blockquote>
              <p className="name">{quoutes[4].fullName}</p>
              <p className="position">{quoutes[4].position}</p>
              <p className="date">{quoutes[4].date}</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
