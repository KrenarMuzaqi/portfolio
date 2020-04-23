import React from "react";

import { ReactComponent as Logo } from "../../assets/images/mkblack.svg";

import "./_loader.scss";

const Loader = () => {
  return (
    <div class="loading-holder">
      <div class="logo-loading">
        <div></div>
        <div></div>
        <div>
          <Logo class="km-logo" alt="logo img" />
        </div>
      </div>
    </div>
  );
};
export default Loader;
