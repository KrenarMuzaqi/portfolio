import React, { useEffect } from "react";

import Slider from "react-slick";

import Aos from "aos";
import "aos/dist/aos.css";

import { useCurrentWitdh } from "../../media-query/media-query";

import QUOTES_DATA from "./testimonials-data";

import EndritGashiImg from "../../assets/images/endrit-gashi.jpg";
import LirijeUka from "../../assets/images/lirije-uka.jpg";
import QlirimAsllani from "../../assets/images/qlirim-asllani.jpg";
import MuhametHumolli from "../../assets/images/muhamet-humolli.jpg";
import QëndrimPllana from "../../assets/images/qëndrim-pllana.jpg";

import "./_testimonials.scss";

const Testimonials = () => {
  const quoutes = QUOTES_DATA;
  const width = useCurrentWitdh();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  if (width > 1024) {
    sliderSettings.autoplay = true;
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="testimonials">
      <div className="testimonials-content">
        <h1 className="title" data-aos="fade-down-right">
          Testimonials
        </h1>
        <div
          className="slider"
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <Slider {...sliderSettings}>
            <div className="slider-box">
              <blockquote>{quoutes[0].qoute}</blockquote>
              <img src={LirijeUka} alt="qoute img" className="quote-img" />
              <p className="name">{quoutes[0].fullName}</p>
              <p className="position">{quoutes[0].position}</p>
              <p className="date">{quoutes[0].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[1].qoute}</blockquote>
              <img src={EndritGashiImg} alt="qoute img" className="quote-img" />
              <p className="name">{quoutes[1].fullName}</p>
              <p className="position">{quoutes[1].position}</p>
              <p className="date">{quoutes[1].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[2].qoute}</blockquote>
              <img src={QëndrimPllana} alt="qoute img" className="quote-img" />
              <p className="name">{quoutes[2].fullName}</p>
              <p className="position">{quoutes[2].position}</p>
              <p className="date">{quoutes[2].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[3].qoute}</blockquote>
              <img src={MuhametHumolli} alt="qoute img" className="quote-img" />
              <p className="name">{quoutes[3].fullName}</p>
              <p className="position">{quoutes[3].position}</p>
              <p className="date">{quoutes[3].date}</p>
            </div>
            <div className="slider-box">
              <blockquote>{quoutes[4].qoute}</blockquote>
              <img src={QlirimAsllani} alt="qoute img" className="quote-img" />
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
