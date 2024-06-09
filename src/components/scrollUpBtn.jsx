import React, { useState } from "react";
import { IconArrowUp } from '@tabler/icons-react';

// https://blog.greenroots.info/gatsby-the-window-is-not-defined-error-what-and-how-to-fix-it
const isBrowser = typeof window !== "undefined";

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

  isBrowser && window.addEventListener("scroll", checkScrollTop);

  return (
    <IconArrowUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;
