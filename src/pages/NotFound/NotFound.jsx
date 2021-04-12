import React from "react";
import { Link } from "react-router-dom";

import NotFoundSVG from "./not-found.svg";

import "./_not-found.scss";

const NotFound = () => {
  return (
    <div className="thank-you">
      <div className="thank-you-content">
        <h1 className="thank-you-title">Sorry, this page isn't available</h1>
        <p className="thank-you-subtitle">
          The page you were looking for couldn't be found
        </p>

        <img src={NotFoundSVG} alt="thank-you img" className="not-found-img" />
        <div className="btn-holder">
          <Link to="/" className="btn-back">
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
