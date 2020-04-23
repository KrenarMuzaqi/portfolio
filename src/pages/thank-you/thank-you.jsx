import React from "react";
import { Link } from "react-router-dom";

import ThankYouSVG from "../../assets/images/thank-you.svg";

import "./_thank-you.scss";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <div className="thank-you-content">
        <h1 className="thank-you-title">Thank you for getting in touch!</h1>
        <p className="thank-you-subtitle">
          I appreciate you contacting me. I will get back in touch with you
          soon!
        </p>
        <p className="thank-you-subtitle">Have a great day!</p>

        <img src={ThankYouSVG} alt="thank-you img" className="thank-you-img" />
        <div className="btn-holder">
          <Link to="/" className="btn-back">
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
