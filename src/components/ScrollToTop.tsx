import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="回到顶部"
        >
          <img
            src="/sustechocean/static/up.png"
            alt="回到顶部"
            className="scroll-to-top-icon"
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
