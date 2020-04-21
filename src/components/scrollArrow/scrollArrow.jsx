import React, { useState } from "react";

import scrollArrow from "../../assets/icons/scrollArrow.svg";
import "./_scrollArrow.scss";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <img src={scrollArrow} alt="scroll arrow" className="scroll-arrow" />
    </div>
  );
};

export default ScrollArrow;
