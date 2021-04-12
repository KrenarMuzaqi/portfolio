import React from "react";

import { ReactComponent as Logo } from "../assets/images/mkblack.svg";

import "./_loader.scss";

const Loader = () => {
  return (
    <div className="loading-holder">
      <div className="logo-loading">
        <div></div>
        <div></div>
        <div>
          <Logo className="km-logo" alt="logo img" />
        </div>
      </div>
    </div>
  );
};
export default Loader;
